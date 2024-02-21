import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
const Quiz = ({setUserPreferences}) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [shoppingFor, setShoppingFor] = useState("");
  const [occasion, setOccasion] = useState("");
  // const [holiday, setHoliday] = useState("");
  const [template, setTemplate] = useState(false);

  const navigate = useNavigate();

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
    // setHoliday(value);
    setShoppingFor("all");
    setOccasion(value);
    setQuestionNumber(4);
  };

  const handleFinishQuiz = () => {
    console.log(shoppingFor, occasion);
    setUserPreferences({shoppingFor, occasion});
    navigate("/");
  };

  return (
    <div>
      {questionNumber === 1 && (
        <div>
          Who are you shopping for today?
          <Button onClick={() => handleShoppingFor("partner")}>
            Romantic Partner
          </Button>
          <Button onClick={() => handleShoppingFor("familyMember")}>
            Family Member
          </Button>
          <Button onClick={() => handleShoppingFor("friend")}>Friend</Button>
        </div>
      )}
      {questionNumber === 2 && (
        <div>
          What occasion are you shopping for?
          <Button onClick={() => handleOccasion("romance")}>
            Romantic Gesture
          </Button>
          <Button onClick={() => handleOccasion("appreciation")}>
            Appreciation
          </Button>
          <Button onClick={() => handleOccasion("apology")}>Apology</Button>
          <Button onClick={() => handleOccasion("fun")}>Fun</Button>
          <Button onClick={() => handleOccasion("Upcoming Holiday")}>
            Upcoming Holiday
          </Button>
        </div>
      )}
      {questionNumber === 3 && (
        <div>
          Which Holiday are you shopping for?
          <Button onClick={() => handleHoliday("valentines")}>
            Valentine’s
          </Button>
          <Button onClick={() => handleHoliday("easter")}>Easter</Button>
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
