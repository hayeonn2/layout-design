import { Title } from "../../common/components/Title";
import "./ProgramEdit.layout.css";
import { EDIT_STEP } from "../../../constants/editStep";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

export const ProgramEditLayout = () => {
  const programRef = useRef(null);
  const formData = new FormData();

  return (
    <div className="program_edit_layout">
      <Title
        title={"프로그램 개설"}
        comment={"멋진 프로그램을 개설해보려고 합니다."}
      />

      {/* 프로그램 설계 단계 설정 */}
      <div className="program_step_wrapper">
        <ul className="program_step_box">
          {EDIT_STEP.map(({ img, alt, title, step }, idx) => (
            <li key={idx}>
              <img src={img} alt={alt} />
              <p>{step}</p>
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </div>

      <Outlet context={(programRef, formData)} />
    </div>
  );
};
