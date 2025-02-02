import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, Lock, Unlock } from 'lucide-react';

interface TimeCapsuleEntry {
  id: string;
  message: string;
  openDate: string;
  createdAt: string;
}

const TimeCapsule = () => {
  const [message, setMessage] = useState('');
  const [openDate, setOpenDate] = useState('');
  const [capsules, setCapsules] = useState<TimeCapsuleEntry[]>([]);

  // Load capsules from localStorage on component mount
  useEffect(() => {
    const savedCapsules = localStorage.getItem('timeCapsules');
    if (savedCapsules) {
      setCapsules(JSON.parse(savedCapsules));
    }
  }, []);

  // Save capsules to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('timeCapsules', JSON.stringify(capsules));
  }, [capsules]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !openDate) return;

    const newCapsule: TimeCapsuleEntry = {
      id: Date.now().toString(),
      message,
      openDate,
      createdAt: new Date().toISOString(),
    };

    setCapsules([...capsules, newCapsule]);
    setMessage('');
    setOpenDate('');
  };

  const canOpen = (date: string) => {
    return new Date(date) <= new Date();
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Hộp thời gian
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-4 mb-6">
            <Timer className="text-pink-500" size={24} />
            <h2 className="text-2xl font-semibold">Lời hẹn ước cho tương lai</h2>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-48 p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-4"
            placeholder="Viết lời hẹn ước của bạn ở đây..."
            required
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">
                Ngày mở:
              </label>
              <input
                type="date"
                value={openDate}
                onChange={(e) => setOpenDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="p-2 rounded-lg border border-gray-200"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Lưu lời hẹn ước
            </button>
          </div>
        </form>
      </motion.div>

      <div className="space-y-4">
        {capsules.map((capsule) => (
          <motion.div
            key={capsule.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {canOpen(capsule.openDate) ? (
                  <Unlock className="text-green-500" size={20} />
                ) : (
                  <Lock className="text-gray-400" size={20} />
                )}
                <span className="text-sm text-gray-500">
                  Mở vào: {formatDate(capsule.openDate)}
                </span>
              </div>
              <span className="text-sm text-gray-400">
                Tạo ngày: {formatDate(capsule.createdAt)}
              </span>
            </div>
            {canOpen(capsule.openDate) ? (
              <p className="text-gray-700">{capsule.message}</p>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                <Lock className="mx-auto mb-2" size={24} />
                <p>Lời hẹn ước này sẽ được mở vào {formatDate(capsule.openDate)}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimeCapsule;