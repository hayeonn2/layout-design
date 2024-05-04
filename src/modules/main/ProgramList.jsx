import { useNavigate } from "react-router-dom";
import "../../style/ProgramList.css";

export function ProgramList() {
  const navigate = useNavigate();

  const navigateEdit = () => {
    navigate("/edit");
  };

  return (
    <div className="container">
      <button onClick={navigateEdit}> 프로그램 개설해버리기</button>
    </div>
  );
}
