import { useContext } from "react";
import { AppContext } from "../App";

export const Context = () => {
  //data goes through context
  const details = useContext(AppContext);
  return (
    <>
      {details && (
        <div>
          <p>I'm usyin the context to show the language: {details.language}</p>
        </div>
      )}
    </>
  );
};
