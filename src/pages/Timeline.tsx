import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Heart } from 'lucide-react';

const timelineEvents = [
  {
    date: '03/06/2022',
    title: 'Ngày đầu tiên gặp nhau',
    description: 'Ngày này là sau khi đi Đà Lạt được một tuần',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800'
  },
  {
    date: '14/02/2023',
    title: 'Ngày tỏ tình',
    description: 'Vào ngày Valentine, lúc này tui còn vội vàng quá nhưng cũng cắm nến hơi sến súa',
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=800'
  },
  
  {
    date: '15/03/2024',
    title: 'Ngày đón Bus về nhà',
    description: 'Ngày này mình mới vừa cãi nhau xong và Bus đến như một món quà vậy',
    image: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739498240/z6315816704368_b83ac6fabbda1e3e031d2b97c2d11a79_hlffoz.jpg'
  },
  {
    date: '16/7/2024',
    title: 'Ngày chữa lành',
    description: 'Ngày này mình đi chữa lành nè',
    image: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739495975/20240716_122850_eha0sr.jpg' // updated drive link
  },
  {
    date: '21/1/2025',
    title: 'Ảnh cả nhà',
    description: 'Tấm ảnh chụp với cả nhà Nắng nè',
    image: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739495975/20250121_220816_un5vah.jpg'
  },
  {
    date: '21/1/2025',
    title: 'Làm chuồng gà cho mẹ Nắng',
    description: '',
    image: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739495974/Locket_1737459647592_79_ege6ws.webp'
  },
  {
    date: '21/1/2025',
    title: 'Cùng ngày làm chuồng gà',
    description: 'Lúc này tui đang chiên cá viên cho Nắng đi ăn tối',
    image: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739495974/Locket_1737459665719_19_r7klte.webp'
  },
  {
    date: '??/??/2025',
    title: 'Hông nhớ ngày này',
    description: 'Hôm nào ấy mà dễ thương',
    image: 'https://res.cloudinary.com/drvpldkxq/image/upload/v1739495974/Locket_1737459641027_74_meix1v.webp'
  }
];

const Timeline = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Hành trình của Nắng và Thúi
      </h1>
      
      <VerticalTimeline>
        {timelineEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
            date={event.date}
            iconStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
            icon={<Heart className="w-5 h-5" />}
          >
            <div className="mb-4 relative aspect-video overflow-hidden rounded-lg">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover" // image now fills container
              />
            </div>
            <h3 className="vertical-timeline-element-title text-xl font-bold mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600">
              {event.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;