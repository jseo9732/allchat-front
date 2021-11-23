import { Link } from "react-router-dom";
import "./EmptyPage.css";

export default function EmptyPage() {
  return (
    <div className="EmptyPage">
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌아가기</Link>
    </div>
  );
}
