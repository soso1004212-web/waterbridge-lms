import { useParams } from "react-router-dom";

export default function CourseView() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>강의 #{id}</h1>

      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="강의영상"
          allowFullScreen
        />
      </div>

      <button>수강완료</button>
    </div>
  );
}