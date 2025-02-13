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
    date: '23/04/2023',
    title: 'Bánh mì hình thù',
    description: 'Ngày này là tui đang bị cách ly ở nhà và Nghi chạy mua cho tui bánh mì bạch tuột này',
    image: 'https://photos.onedrive.com/share/5CF1919069154895!s2020878c794b4a88bfbc0e257900fb2c?cid=5CF1919069154895&resId=5CF1919069154895!s2020878c794b4a88bfbc0e257900fb2c&ithint=photo&e=vLxw2m&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2kvYy81Y2YxOTE5MDY5MTU0ODk1L0VZeUhJQ0JMZVloS3Y3d09KWGtBLXl3QlYtaXpob3l3NEdLd2Ztbm1tQ01YS1E_ZT12THh3Mm0'
  },
  {
    date: '08/03/2024',
    title: 'Ngày đón Bus về nhà',
    description: 'Ngày này mình mới vừa cãi nhau xong và Bus đến như một món quà vậy',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800'
  },
  {
    date: '16/7/2024',
    title: 'Ngày chữa lành',
    description: 'Ngày này mình đi chữa lành nè',
    image: 'https://drive.google.com/file/d/1vSkx1tjj3emOIo1z43zpIyNl__inJ25v/view?usp=sharing'
  },
  {
    date: '21/1/2025',
    title: 'Ảnh cả nhà',
    description: 'Tấm ảnh chụp với cả nhà Nắng nè',
    image: 'https://thumbs2.imgbox.com/45/b7/LY1Fia3F_t.jpg'
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
            <div className="mb-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg"
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