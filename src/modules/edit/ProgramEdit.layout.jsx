import { Title } from "../common/components/Title";
import "./ProgramEdit.layout.css";

export const ProgramEditLayout = () => {
  return (
    <div className="program_edit_layout">
      <Title
        title={"프로그램 개설"}
        comment={"멋진 프로그램을 개설해보려고 합니다."}
      />
    </div>
  );
};
