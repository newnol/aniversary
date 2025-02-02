import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Heart } from 'lucide-react';

const timelineEvents = [
  {
    date: '03/06/2022',
    title: 'Ngày đầu tiên gặp nhau',
    description: 'Định mệnh đã cho chúng ta gặp nhau, một ngày đặc biệt mà cả hai sẽ không bao giờ quên.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800'
  },
  {
    date: '14/02/2023',
    title: 'Ngày tỏ tình',
    description: 'Vào ngày Valentine, những lời yêu thương đầu tiên đã được thốt lên, đánh dấu khởi đầu cho chuyện tình của chúng ta.',
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=800'
  },
  {
    date: '15/03/2023',
    title: 'Chuyến du lịch đầu tiên',
    description: 'Những kỷ niệm đẹp trong chuyến đi đầu tiên của hai chúng ta.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800'
  }
];

const Timeline = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Hành trình tình yêu của chúng ta
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