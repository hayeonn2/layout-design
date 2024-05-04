import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgramList } from "../modules/main/ProgramList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 제일 메인 페이지 */}
        <Route exact path="/" element={<ProgramList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
