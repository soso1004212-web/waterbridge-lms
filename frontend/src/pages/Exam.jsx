import { useState } from "react";

export default function Exam() {
  const [score, setScore] = useState(null);

  const submitExam = () => {
    setScore(100);
  };

  return (
    <div className="page">
      <h1>최종 시험</h1>

      <div className="card">
        <p>Q1. 워터브릿지 LMS의 목적은?</p>

        <label>
          <input type="radio" name="q1" />
          교육
        </label>

        <br />

        <label>
          <input type="radio" name="q1" />
          게임
        </label>
      </div>

      <button onClick={submitExam}>제출하기</button>

      {score && (
        <div className="card">
          <h2>점수 : {score}점</h2>
        </div>
      )}
    </div>
  );
}