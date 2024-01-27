import React, { useEffect, useState } from "react";

const Question = ({title, content} : {title:string, content: string}) => {

  const [show, setShow] = useState(false);

 useEffect(() => {
    const scroll = () => {
      setShow(false);
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return(
    <div className="question">
      <div className="question-clickable">
        <h2>{title}</h2>
        <button className="btn-question" onClick={() => setShow(!show)}>{show ? <p>-</p> : <p>+</p>}</button>
      </div>
      <div className="question-answer">
        {show && <p>{content}</p>}
      </div>
    </div>
  )
};

export default Question;