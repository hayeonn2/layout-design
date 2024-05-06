import { useEffect } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { ProgramStep1 } from "../components/step/Program.step1";

export const ProgramEdit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Outlet에 기본 제공되는 context를 이용해 자식요소에게 Props 전달
  const { programRef } = useOutletContext();

  useEffect(() => {
    searchParams.set("step", "1");
    setSearchParams(searchParams);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "45%",
        padding: "30px",
        color: "white",
        backgroundColor: "black",
      }}
      onClick={() => console.log(programRef)}
    >
      <ProgramStep1 programRef={programRef} />
    </div>
  );
};
