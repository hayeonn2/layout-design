import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgramList } from "../modules/main/ProgramList";
import { ProgramEditLayout } from "../modules/edit/layout/ProgramEdit.layout";
import { ProgramEdit } from "../modules/edit/main/ProgramEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 제일 메인 페이지 */}
        <Route exact path="/" element={<ProgramList />} />

        <Route path="edit/*" element={<ProgramEditLayout />}>
          <Route index element={<ProgramEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
