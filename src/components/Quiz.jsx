import React, { useState } from "react";

const Quiz = ({ setRecommendation }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [shoppingFor, setShoppingFor] = useState("");
  const [occasion, setOccasion] = useState("");
  const [holiday, setHoliday] = useState("");

  const handleShoppingFor = (value) => {
    setShoppingFor(value);
    setQuestionNumber(2);
  };

  const handleOccasion = (value) => {
    setOccasion(value);
    if (value === "Upcoming Holiday") {
      setQuestionNumber(3);
    } else {
      setQuestionNumber(4);
    }
  };

  const handleHoliday = (value) => {
    setHoliday(value);
    setQuestionNumber(4);
  };

  const handleFinishQuiz = () => {
    console.log(shoppingFor, occasion, holiday);
  };

  return (
    <div>
      {questionNumber === 1 && (
        <div>
          Who are you shopping for today?
          <button onClick={() => handleShoppingFor("Romantic Partner")}>
            Romantic Partner
          </button>
          <button onClick={() => handleShoppingFor("Family Member")}>
            Family Member
          </button>
          <button onClick={() => handleShoppingFor("Friend")}>Friend</button>
        </div>
      )}
      {questionNumber === 2 && (
        <div>
          What occasion are you shopping for?
          <button onClick={() => handleOccasion("Romantic Gesture")}>
            Romantic Gesture
          </button>
          <button onClick={() => handleOccasion("Appreciation")}>
            Appreciation
          </button>
          <button onClick={() => handleOccasion("Apology")}>Apology</button>
          <button onClick={() => handleOccasion("Fun")}>Fun</button>
          <button onClick={() => handleOccasion("Upcoming Holiday")}>
            Upcoming Holiday
          </button>
        </div>
      )}
      {questionNumber === 3 && (
        <div>
          Which Holiday are you shopping for?
          <button onClick={() => handleHoliday("Valentine’s")}>
            Valentine’s
          </button>
          <button onClick={() => handleHoliday("Easter")}>Easter</button>
        </div>
      )}
      {questionNumber === 4 && (
        <div>
          Would you like us to start you with a template?
          <button
            variant="contained"
            color="primary"
            onClick={() => {
              setTemplate(true);
              handleFinishQuiz();
            }}
          >
            Yes, start with a template
          </button>
          <button
            variant="contained"
            color="secondary"
            onClick={() => {
              setTemplate(false);
              handleFinishQuiz();
            }}
          >
            No, I will choose individually
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
