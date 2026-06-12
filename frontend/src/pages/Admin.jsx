import { useState } from "react";

export default function Admin() {
  const [courses] = useState([
    "워터브릿지 입문교육",
    "상품교육",
    "영업교육",
  ]);

  return (
    <div className="page">
      <h1>관리자 페이지</h1>

      <div className="card">
        <h2>회원 현황</h2>

        <p>총 회원수 : 15명</p>
      </div>

      <div className="card">
        <h2>강의 목록</h2>

        {courses.map((course, index) => (
          <div key={index}>
            {course}
          </div>
        ))}
      </div>

      <div className="card">
        <h2>시험 관리</h2>

        <button>문제 등록</button>
      </div>
    </div>
  );
}