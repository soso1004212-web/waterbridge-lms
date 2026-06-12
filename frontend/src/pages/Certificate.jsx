export default function Certificate() {
  return (
    <div className="page">
      <div className="certificate">
        <h1>수료증</h1>

        <h2>홍길동</h2>

        <p>
          위 사람은 WaterBridge LMS 교육과정을
          성공적으로 이수하였음을 증명합니다.
        </p>

        <br />

        <p>WaterBridge Partners</p>

        <button onClick={() => window.print()}>
          수료증 출력
        </button>
      </div>
    </div>
  );
}