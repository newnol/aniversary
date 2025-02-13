import React from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

const FIRST_DATE = '2022-06-03'; // First meeting
const CONFESSION_DATE = '2023-02-14'; // First confession

const Home = () => {
  const daysCount = dayjs().diff(FIRST_DATE, 'day');

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
            src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1920"
            alt="Love Story Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Chào mừng đến với hành trình yêu thương của chúng ta!
            </h1>
          </div>
        </div>

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
            Mỗi ngày bên nhau là một ngày tràn ngập hạnh phúc và yêu thương
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HighlightCard
            title="Ngày đầu tiên gặp nhau"
            description="Khoảnh khắc đầu tiên của chúng ta"
            date="03/06/2022"
          />
          <HighlightCard
            title="Ngày tỏ tình"
            description="Lời yêu thương đầu tiên"
            date="14/02/2023"
          />
          <HighlightCard
            title="Khoảnh khắc đặc biệt"
            description="Ngày đầu tiên kiếm được bus"
            date="8/03/2023"
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