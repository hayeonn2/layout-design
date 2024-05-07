import "../../style/programEditStyle.css";

export const ContentBox = ({ title, children }) => {
  return (
    <>
      <div>
        <p className="content_box_title">{title}</p>
      </div>
      <section>{children}</section>
    </>
  );
};
