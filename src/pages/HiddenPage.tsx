import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const HiddenPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') { // Example password
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <Lock className="text-pink-500" size={48} />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6">
            Trang bí mật
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-200 mb-4"
              placeholder="Nhập mật khẩu..."
            />
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Mở khóa
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Nội dung bí mật
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-700">
          Đây là nội dung bí mật chỉ dành cho chúng ta...
        </p>
      </div>
    </motion.div>
  );
};

export default HiddenPage;