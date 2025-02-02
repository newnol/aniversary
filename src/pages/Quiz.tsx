import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, RefreshCw } from 'lucide-react';
import quizData from '../data/quiz-questions.json';

const QUESTIONS_PER_QUIZ = 4;

const Quiz = () => {
  const [questions, setQuestions] = useState<typeof quizData.questions>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  useEffect(() => {
    // Randomly select questions
    const shuffledQuestions = [...quizData.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, QUESTIONS_PER_QUIZ);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers, optionIndex];
    setSelectedAnswers(newSelectedAnswers);

    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    // Randomly select new questions
    const shuffledQuestions = [...quizData.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, QUESTIONS_PER_QUIZ);
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswers([]);
  };

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return 'Tuyệt vời! Bạn hiểu đối phương quá rõ! ❤️';
    if (percentage >= 75) return 'Rất tốt! Bạn hiểu đối phương khá rõ! 💕';
    if (percentage >= 50) return 'Cũng được! Hãy tìm hiểu đối phương thêm nhé! 💝';
    return 'Cố gắng tìm hiểu đối phương nhiều hơn nữa nhé! 💖';
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Trắc nghiệm tình yêu
      </h1>
      
      {!showResult ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">
                Câu hỏi {currentQuestion + 1}/{questions.length}
              </span>
              <Heart className="text-pink-500" />
            </div>
            <h2 className="text-2xl font-semibold">
              {questions[currentQuestion].question}
            </h2>
          </div>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left rounded-lg bg-gray-50 hover:bg-pink-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Kết quả</h2>
          <div className="text-6xl font-bold text-pink-500 mb-4">
            {score}/{questions.length}
          </div>
          <p className="text-xl mb-8">{getResultMessage()}</p>
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors mx-auto"
          >
            <RefreshCw size={18} />
            Làm lại
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Quiz