import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, Lock } from 'lucide-react';

const Messages = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      date: '03/06/2022',
      content: 'Ngày đầu tiên gặp em, anh đã biết mình không thể rời xa em được nữa...',
      isPrivate: false
    },
    {
      id: 2,
      date: '14/02/2023',
      content: 'Hôm nay là ngày đặc biệt nhất trong đời anh, ngày anh nói lên tiếng yêu đầu tiên...',
      isPrivate: true
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        date: new Date().toLocaleDateString('vi-VN'),
        content: newMessage,
        isPrivate: false
      }
    ]);
    setNewMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Lời nhắn yêu thương
      </h1>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full h-32 p-4 mb-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          placeholder="Viết lời nhắn yêu thương..."
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            <Send size={18} />
            Gửi lời nhắn
          </button>
        </div>
      </motion.form>

      <div className="grid gap-6">
        {messages.map((message) => (
          <MessageCard key={message.id} {...message} />
        ))}
      </div>
    </div>
  );
};

const MessageCard = ({ date, content, isPrivate }: { date: string; content: string; isPrivate: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-lg shadow-md p-6"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Heart className="text-pink-500" size={20} />
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      {isPrivate && (
        <Lock className="text-gray-400" size={16} />
      )}
    </div>
    <p className="text-gray-700">{content}</p>
  </motion.div>
);

export default Messages;