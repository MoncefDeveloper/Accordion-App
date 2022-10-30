import React, { useEffect, useRef, useState } from "react";
import myColors from "./colors";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info, title }) => {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState("auto");

  const randomNumber = Math.floor(Math.random() * myColors?.length);
  const style = {
    height: height,
    borderLeft: myColors[randomNumber]?.borderLeft,
    backgroundColor: myColors[randomNumber]?.backgroundColor,
  };
  let questionSection = useRef(null);

  const change = () => {
    setShow(!show);
  };

  useEffect(() => {
    const children = [...questionSection.children];
    const titleHeight = children[0].getBoundingClientRect().height;
    const textHeight = children[1].getBoundingClientRect().height;

    if (show) {
      setHeight(`${titleHeight + textHeight}px`);
    } else {
      setHeight(titleHeight + "px");
    }
  }, [show]);
  return (
    <section onClick={change} style={style} ref={(e) => (questionSection = e)}>
      <div className="que">
        <h2>{title}</h2>
        <button>{show ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </div>
      <div className="que">
        <p>{info}</p>
      </div>
    </section>
  );
};

export default Question;
