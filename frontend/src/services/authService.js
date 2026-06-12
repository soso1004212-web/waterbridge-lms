export async function login(
  email,
  password
) {
  return {
    uid: "123",
    email,
    role: "user",
  };
}

export async function logout() {
  return true;
}