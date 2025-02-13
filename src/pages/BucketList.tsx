import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Plus, Trash2, Edit } from 'lucide-react'; // added Edit

const BucketList = () => {
  const [items, setItems] = useState([
    { id: 1, task: 'Du lịch Paris cùng nhau', completed: false },
    { id: 2, task: 'Học nấu ăn cùng nhau', completed: true },
    { id: 3, task: 'Trồng một khu vườn nhỏ', completed: false },
    { id: 4, task: 'Chụp ảnh cưới ở Đà Lạt', completed: false },
    { id: 5, task: 'Mở một quán cafe nhỏ', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null); // new state for editing
  const [editingValue, setEditingValue] = useState('');         // new state for editing value

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    setItems([
      ...items,
      { id: items.length + 1, task: newTask, completed: false }
    ]);
    setNewTask('');
  };

  const toggleComplete = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  // new functions for editing
  const startEditing = (id: number, currentTask: string) => {
    setEditingId(id);
    setEditingValue(currentTask);
  };

  const updateItem = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, task: editingValue } : item
    ));
    setEditingId(null);
    setEditingValue('');
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingValue('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Bucket List của chúng ta
      </h1>

      <motion.form
        onSubmit={handleAdd}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="Thêm mục tiêu mới..."
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            <Plus size={18} />
            Thêm
          </button>
        </div>
      </motion.form>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between gap-4 p-4 rounded-lg hover:bg-gray-50 group"
            >
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={() => toggleComplete(item.id)}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  {item.completed ? (
                    <CheckCircle2 className="text-green-500" />
                  ) : (
                    <Circle />
                  )}
                </button>
                {/* Conditionally render task text or input */}
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    className="flex-1 p-2 border-b border-gray-300 focus:outline-none"
                  />
                ) : (
                  <span className={item.completed ? 'line-through text-gray-500' : ''}>
                    {item.task}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {editingId === item.id ? (
                  <>
                    <button
                      onClick={() => updateItem(item.id)}
                      className="text-green-500 hover:text-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="text-gray-500 hover:text-gray-600"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => startEditing(item.id, item.task)}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Edit size={18} />
                  </button>
                )}
                <button
                  onClick={() => removeItem(item.id)}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BucketList;