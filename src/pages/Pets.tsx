import React from 'react';
import { motion } from 'framer-motion';

const petPhotos = [
  {
    src: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739498240/z6315816704368_b83ac6fabbda1e3e031d2b97c2d11a79_hlffoz.jpg',
    width: 800,
    height: 600,
    title: 'Bus'
  },
  {
    src: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739495975/20240716_122850_eha0sr.jpg',
    width: 800,
    height: 600,
    title: 'Bus and Chuột'
  },
  {
    src: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739495975/20250121_220816_un5vah.jpg',
    width: 800,
    height: 600,
    title: 'Cả nhà'
  },
  {
    src: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739495974/Locket_1737459647592_79_ege6ws.webp',
    width: 800,
    height: 600,
    title: 'Nắng và Bus'
  }
];

const Pets = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Ảnh thú cưng
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {petPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.title}
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: photo.width / photo.height }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Pets;
