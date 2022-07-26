import React, { useState } from "react";
import "./Single.scss";

export const Single = (props) => {
  const [correct, setCorrect] = useState(null);
  const [selected, setSelected] = useState(null);
  const [confirm, setConfirm] = useState(false);

  const selectAnswer = (id) => {
    if (!confirm) {
      setSelected(id + 1);
    }
  };

  const handleConfirm = () => {
    setConfirm(true);
    if (selected === props.answer.answer) {
      setCorrect(true);
      props.newScore(props.score + 1);
    } else setCorrect(false);
  };

  return (
    <div className="question-container">
      <div className="question-content">
        <h3>{props.question.question}</h3>

        <div className="answer-options">
          {props.question.options.map((option, index) => (
            <div
              key={option}
              className={
                "single-option " +
                (correct === true && selected - 1 === index
                  ? "correct"
                  : correct === false && selected - 1 === index
                  ? "wrong"
                  : selected - 1 === index
                  ? "active "
                  : "")
              }
              onClick={() => selectAnswer(index)}
            >
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
      {!confirm && selected && (
        <button onClick={() => handleConfirm()} disabled={!selected}>
          Confirm
        </button>
      )}
      {confirm && <button onClick={() => props.onClick()}>Next</button>}
    </div>
  );
};
