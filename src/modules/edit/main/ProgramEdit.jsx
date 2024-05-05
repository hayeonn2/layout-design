import { useEffect } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";

export const ProgramEdit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { programRef, formData } = useOutletContext();

  useEffect(() => {
    searchParams.set("step", "1");
    setSearchParams(searchParams);
  }, []);

  return <div>자식요소에염~!</div>;
};
