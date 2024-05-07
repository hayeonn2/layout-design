import { Title } from "../../common/components/Title";
import "./ProgramEdit.layout.css";
import { EDIT_STEP } from "../../../constants/editStep";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

export const ProgramEditLayout = () => {
  // programRef:  {current: null} 형태로 출력됨.
  const programRef = useRef({
    // 개설 후 데이터 저장 (불러오기 기능을 위해서)
    cacheData: [],

    // 사용자가 입력한 데이터를 저장할 곳
    requestData: {
      baseInfo: null,
    },
  });

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

      {/* Outlet context를 이용해 자식요소에 props 전달. 이때 {} 를 이용해 넘겨야 함. */}
      <Outlet context={{ programRef, formData }} />
    </div>
  );
};
