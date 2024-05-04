import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgramList } from "../modules/main/ProgramList";
import { ProgramEditLayout } from "../modules/edit/ProgramEdit.layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 제일 메인 페이지 */}
        <Route exact path="/" element={<ProgramList />} />
        <Route path="edit" element={<ProgramEditLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
