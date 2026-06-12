import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="page">
      <h1>대시보드</h1>

      <div className="dashboard-grid">
        <div className="card">
          <h3>수강 강의</h3>
          <p>3개</p>
        </div>

        <div className="card">
          <h3>평균 진도율</h3>
          <p>75%</p>
        </div>

        <div className="card">
          <h3>시험 상태</h3>
          <p>응시 가능</p>
        </div>
      </div>

      <Link to="/courses">
        <button>강의 보러가기</button>
      </Link>
    </div>
  );
}