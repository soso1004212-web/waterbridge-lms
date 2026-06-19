// Vercel Serverless Function
// 파일 위치: waterbridge-lms/api/admin-update-password.js
//
// Vercel 환경변수 필요:
// FIREBASE_PROJECT_ID
// FIREBASE_CLIENT_EMAIL
// FIREBASE_PRIVATE_KEY
//
// package.json dependencies:
// "firebase-admin": "^12.7.0"

const admin = require("firebase-admin");

function initFirebaseAdmin() {
  if (admin.apps.length) return admin.app();

  const privateKey = process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : undefined;

  if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !privateKey) {
    throw new Error("Firebase Admin 환경변수가 설정되지 않았습니다.");
  }

  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
  });
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST만 허용됩니다." });
  }

  try {
    initFirebaseAdmin();

    const authHeader = req.headers.authorization || "";
    const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

    if (!idToken) {
      return res.status(401).json({ error: "관리자 인증 토큰이 없습니다." });
    }

    const decoded = await admin.auth().verifyIdToken(idToken);

    const adminDoc = await admin
      .firestore()
      .collection("users")
      .doc(decoded.uid)
      .get();

    if (!adminDoc.exists || adminDoc.data().role !== "admin") {
      return res.status(403).json({ error: "관리자 권한이 없습니다." });
    }

    const { uid, password } = req.body || {};

    if (!uid || typeof uid !== "string") {
      return res.status(400).json({ error: "회원 UID가 필요합니다." });
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return res.status(400).json({ error: "비밀번호는 6자 이상이어야 합니다." });
    }

    await admin.auth().updateUser(uid, { password });

    await admin.firestore().collection("users").doc(uid).set({
      passwordChangedAt: Date.now(),
      passwordChangedBy: decoded.uid,
      forceLogout: true,
      forceLogoutAt: Date.now(),
      online: false,
      currentCourse: null,
      currentCourseTitle: null,
      lastSeen: Date.now(),
    }, { merge: true });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message || "비밀번호 변경 중 서버 오류가 발생했습니다.",
    });
  }
};
