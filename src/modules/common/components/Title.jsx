import "./Title.css";

export const Title = ({ title = "", comment = "" }) => {
  return (
    <div className="title_container">
      <h2>{title}</h2>
      <p>{comment}</p>
    </div>
  );
};
