import { ContentBox } from "./ContentBox";

export const ProgramStep1 = () => {
  return (
    <main>
      <section>
        {/* <p>프로그램 기본 정보</p> */}
        <ContentBox title={"프로그램 기본 정보"}>
          <div className="program_default_info">
            <div className="items_center">
              <p style={{ marginRight: "64px" }}>권역 정보</p>

              {/* 버튼 셀렉트 박스 */}
              <ul className="items_center" style={{ gap: "12px" }}>
                <li>수도권</li>
                <li>호남제주권</li>
                <li>충청권</li>
                <li>동남권</li>
                <li>대경강원권</li>
              </ul>

              <p>* 중복선택 가능</p>
            </div>
          </div>
        </ContentBox>
      </section>
    </main>
  );
};
