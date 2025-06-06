import React from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import Confetti from 'react-confetti';

const FIRST_DATE = '2022-06-03'; // First meeting

const Home = () => {
  const daysCount = dayjs().diff(FIRST_DATE, 'day');
  const yearsCount = dayjs().diff(FIRST_DATE, 'year');
  const showAnniversary = yearsCount >= 3;

  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="relative h-[60vh] rounded-lg overflow-hidden mb-8">
          <img
            src="https://res.cloudinary.com/drvpldkxq/image/upload/v1739498524/IMG_1736177640167_1736178400402_bt5zeq.jpg"
            alt="Love Story Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 opacity-70">
              Chào mừng đến với hành trình của Nắng và Thúi!
            </h1>
          </div>
        </div>

        {showAnniversary && (
          <>
            <Confetti numberOfPieces={200} recycle={false} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-pink-50 rounded-lg shadow-xl p-6 mb-8"
            >
              <h2 className="text-3xl font-bold text-pink-600 mb-2">Kỷ niệm 3 năm quen nhau!</h2>
              <p className="text-gray-700">Cảm ơn em đã đồng hành cùng anh suốt 3 năm qua.</p>
            </motion.div>
          </>
        )}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Chúng ta đã bên nhau được
          </h2>
          <div className="text-6xl font-bold text-pink-500">
            {daysCount} ngày
          </div>
          <p className="text-gray-600 mt-4">
            Mỗi ngày bên nhau là một kỉ niệm
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HighlightCard
            title="Ngày đầu tiên gặp nhau"
            description="Khoảnh khắc lần đầu tiên"
            date="03/06/2022"
          />
          <HighlightCard
            title="Ngày tỏ tình"
            description="Lời yêu thương đầu tiên"
            date="14/02/2023"
          />
          <HighlightCard
            title="Khoảnh khắc đặc biệt"
            description="Ngày đầu tiên kiếm được Bus"
            date="15/03/2023"
          />
          <HighlightCard
            title="Kỷ niệm 3 năm"
            description="Tròn 3 năm yêu nhau rồi nè!"
            date="03/06/2025"
          />
        </div>
      </motion.div>
    </div>
  );
};

const HighlightCard = ({ title, description, date }: { title: string; description: string; date: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-sm text-pink-500 font-medium">{date}</p>
  </motion.div>
);

export default Home;