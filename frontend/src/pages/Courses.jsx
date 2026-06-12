import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "워터브릿지 입문교육",
    progress: 100,
  },
  {
    id: 2,
    title: "상품교육",
    progress: 65,
  },
  {
    id: 3,
    title: "영업교육",
    progress: 30,
  },
];

export default function Courses() {
  return (
    <div className="page">
      <h1>강의목록</h1>

      {courses.map((course) => (
        <div key={course.id} className="card">
          <h3>{course.title}</h3>

          <p>진도율 : {course.progress}%</p>

          <Link to={`/course/${course.id}`}>
            <button>수강하기</button>
          </Link>
        </div>
      ))}
    </div>
  );
}