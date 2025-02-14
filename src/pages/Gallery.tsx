import React from 'react';
import { motion } from 'framer-motion';

const photos = [
	{
		src: "https://res.cloudinary.com/drvpldkxq/image/upload/v1739495975/20240716_122850_eha0sr.jpg",
		width: 800,
		height: 600,
		title: "Photo 2"
	},
	{
		src: "https://res.cloudinary.com/drvpldkxq/image/upload/v1739495975/20250121_220816_un5vah.jpg",
		width: 800,
		height: 600,
		title: "Photo 5"
	},
	{
		src: "https://res.cloudinary.com/drvpldkxq/image/upload/v1739495974/Locket_1737459641027_74_meix1v.webp",
		width: 800,
		height: 600,
		title: "Photo 12"
	},
	{
		src: "https://res.cloudinary.com/drvpldkxq/image/upload/v1739495974/Locket_1737459647592_79_ege6ws.webp",
		width: 800,
		height: 600,
		title: "Photo 13"
	},
	{
		src: "https://res.cloudinary.com/drvpldkxq/image/upload/v1739495974/Locket_1737459665719_19_r7klte.webp",
		width: 800,
		height: 600,
		title: "Photo 14"
	},
	{
		src: "https://res.cloudinary.com/drvpldkxq/image/upload/v1739495975/temp_jamlcj.jpg",
		width: 800,
		height: 600,
		title: "Photo 15"
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
      {/* Pinterest-like masonry grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
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

export default Gallery;