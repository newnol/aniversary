import React from 'react';
import { motion } from 'framer-motion';

const Memories = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Nhìn lại kỷ niệm
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Ngày này năm trước</h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"
            alt="Memory"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-gray-700">
          Một năm trước, chúng ta đã có buổi hẹn đầu tiên tại quán cafe...
        </p>
      </motion.div>
    </div>
  );
};

export default Memories;