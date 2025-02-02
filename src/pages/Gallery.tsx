import React from 'react';
import PhotoAlbum from 'react-photo-album';
import { motion } from 'framer-motion';

const photos = [
  {
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800",
    width: 800,
    height: 600,
    title: "First Date"
  },
  {
    src: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=800",
    width: 800,
    height: 600,
    title: "Our First Trip"
  },
  {
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800",
    width: 800,
    height: 600,
    title: "Special Moment"
  }
];

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Thư viện kỷ niệm
      </h1>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={300}
        onClick={({ photo }) => window.open(photo.src, '_blank')}
      />
    </motion.div>
  );
};

export default Gallery;