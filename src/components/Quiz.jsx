import React, { useState } from "react";
import Button from "./Button";

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
          <Button onClick={() => handleShoppingFor("Romantic Partner")}>
            Romantic Partner
          </Button>
          <Button onClick={() => handleShoppingFor("Family Member")}>
            Family Member
          </Button>
          <Button onClick={() => handleShoppingFor("Friend")}>Friend</Button>
        </div>
      )}
      {questionNumber === 2 && (
        <div>
          What occasion are you shopping for?
          <Button onClick={() => handleOccasion("Romantic Gesture")}>
            Romantic Gesture
          </Button>
          <Button onClick={() => handleOccasion("Appreciation")}>
            Appreciation
          </Button>
          <Button onClick={() => handleOccasion("Apology")}>Apology</Button>
          <Button onClick={() => handleOccasion("Fun")}>Fun</Button>
          <Button onClick={() => handleOccasion("Upcoming Holiday")}>
            Upcoming Holiday
          </Button>
        </div>
      )}
      {questionNumber === 3 && (
        <div>
          Which Holiday are you shopping for?
          <Button onClick={() => handleHoliday("Valentine’s")}>
            Valentine’s
          </Button>
          <Button onClick={() => handleHoliday("Easter")}>Easter</Button>
        </div>
      )}
      {questionNumber === 4 && (
        <div>
          Would you like us to start you with a template?
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setTemplate(true);
              handleFinishQuiz();
            }}
          >
            Yes, start with a template
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setTemplate(false);
              handleFinishQuiz();
            }}
          >
            No, I will choose individually
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
