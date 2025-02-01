import { useLocation } from "react-router-dom";
import { Questions } from "../data/Data";
import { useEffect, useState } from "react";
import "../App.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [topic, setTopic] = useState("");
  const [currentQues, setcurrentQues] = useState(0);
  const [bonus, setBonusPoint] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [timer, setTimer] = useState(30);

  const { state } = useLocation();
  const { chapter } = state;

  useEffect(() => {
    const quizData = Questions(chapter);
    if (quizData) {
      setQuestions(quizData.questions);
      setTopic(quizData.topic);

      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [chapter]);

  useEffect(() => {
    if (currentQues < questions.length) {
      setTimer(30);
    }
  }, [currentQues, questions]);

  const handleNext = () => {
    if (!selectedOption) {
      setAlertMessage("⚠️ Please select an option before proceeding.");
      return;
    }

    // Only process the selected option if this question hasn't been answered already.
    if (!answeredQuestions.includes(selectedOption.question_id)) {
      if (selectedOption.is_correct) {
        if (timer > 0) {
          setBonusPoint((prevBonus) => prevBonus + 5);
        }
        setAnsweredQuestions((prevAnsweredQuestions) => [
          ...prevAnsweredQuestions,
          selectedOption.question_id,
        ]);
      }
    }

    // Move to the next question or show results if this was the last one.
    if (currentQues < questions.length - 1) {
      setTimeout(
        () => setcurrentQues((prevQuestion) => prevQuestion + 1),
        500
      );
    } else {
      setTimeout(() => setShowResult(true), 500);
    }

    // Clear the selected option and any alert messages for the next question.
    setSelectedOption(null);
    setAlertMessage("");
  };

  const handlePrevious = () => {
    if (currentQues > 0) {
      setcurrentQues(currentQues - 1);
      setSelectedOption(null);
      setAlertMessage(""); // Clear alert message on previous
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="p-6">
      {!showResult ? (
        <div className="max-w-xl mx-auto p-12 border-2 border-slate-300 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-center mb-[2rem]">
            {topic}
            <br />
            <span className="absolute top-[7rem] left-[2rem] md:left-[22rem]  xl:top-[7rem] xl:left-[32rem] bg-green-900 text-white px-4 py-1 rounded ">
              {timer}s
            </span>
          </h1>
          <h2 className="text-[1.2rem] mt-4">
            <span className="font-semibold">{currentQues + 1}.</span>{" "}
            {questions[currentQues]?.description}
          </h2>
          <div className="mt-[2rem]">
            {questions[currentQues]?.options.map((option, index) => (
              <div
                key={index}
                className={`p-2 border-2 border-slate-300 rounded cursor-pointer my-2 mr-[4rem] option  ${
                  selectedOption === option
                    ? "bg-[#E1F396] animate-bounce"
                    : "bg-white"
                } transition-colors duration-800`}
                onClick={() => handleOptionClick(option)}
              >
                <span className="font-semibold">{index + 1}.</span>{" "}
                {option.description}
              </div>
            ))}
          </div>

          <div className="mt-[3rem] flex justify-between">
            {currentQues > 0 && (
              <button
                onClick={handlePrevious}
                className="bg-slate-600 text-white px-4 py-2 rounded hover:cursor-pointer"
              >
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              className="bg-[#015055] text-white px-4 py-2 rounded hover:cursor-pointer"
            >
              {currentQues === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
          {/* Alert message */}
          {alertMessage && (
            <div
              className={`mt-4 p-2 rounded ${
                alertMessage !== "⚠️ Please select an option before proceeding."
                  ? ""
                  : "bg-yellow-200"
              }`}
            >
              {alertMessage}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="max-w-md mx-auto p-6 border-2 border-slate-300 rounded-lg shadow-md text-center ">
            <h1 className="text-xl font-bold">Quiz Completed!</h1>
            <p className="text-lg mt-4">
              Your score: {answeredQuestions.length} / {questions.length}
              <br />
              Bonus point: {bonus}
            </p>
          </div>
          {questions.map((ques, idx) => (
            <div
              className="border-2 border-slate-300 rounded-[1rem] my-4 mx-[2rem] p-4 xl:mx-[15rem]"
              key={idx}
            >
              <div className="flex font-semibold">
                <span className="text-[1.2rem]">{idx + 1}.</span>
                <h1 className="text-[1.2rem] text-gray-700">
                  {ques.description}
                </h1>
              </div>
              <div>
                <h1 className="text-[1.4rem] font-semibold mt-2">
                  Explanation:
                </h1>
                <h1 className="text-gray-500">
                  <div
                    className={`mt-4 p-2 rounded`}
                    dangerouslySetInnerHTML={{
                      __html: ques.detailed_solution
                        .replace(
                          /\*\*(.*?)\*\*/g,
                          "<br/><strong>$1</strong><br/>"
                        )
                        .replace(/\*\s(.*?)\n?/g, "<li>$1</li>"),
                    }}
                  />
                </h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
