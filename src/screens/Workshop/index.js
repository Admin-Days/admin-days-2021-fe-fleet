import React from "react";
import { workshops } from "../../mocks/workshops";
import Main from "./Main";
import Speaker from "./Speaker";

const Workshop = () => {
  return (
    <>
      <Main />
      {workshops.map((e, i) => (
        <Speaker {...e} index={i+1} onClick={() => console.log("clicked")}/>
      ))}
    </>
  );
};

export default Workshop;
