import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const features = [
  {
    title: 'Healing',
    description:
      'Calm your mind and thoughts to rediscover your inner strength and peace.',
    icon: '/icons/healing.png',
  },
  {
    title: 'Relaxation',
    description:
      'Let your body and mind settle with deep serenity and satisfaction.',
    icon: '/icons/relaxation.png',
  },
  {
    title: 'Chillout',
    description:
      'Ease tension and stress with music that helps you breathe and smile again.',
    icon: '/icons/chillout.png',
  },
  {
    title: 'Focus',
    description:
      'Sharpen your attention with ambient tones and eliminate distractions.',
    icon: '/icons/focus.png',
  },
   {
    title: 'Focus',
    description:
      'Sharpen your attention with ambient tones and eliminate distractions.',
    icon: '/icons/focus.png',
  },
   {
    title: 'Focus',
    description:
      'Sharpen your attention with ambient tones and eliminate distractions.',
    icon: '/icons/focus.png',
  },
   {
    title: 'Focus',
    description:
      'Sharpen your attention with ambient tones and eliminate distractions.',
    icon: '/icons/focus.png',
  },
   {
    title: 'Focus',
    description:
      'Sharpen your attention with ambient tones and eliminate distractions.',
    icon: '/icons/focus.png',
  },
   {
    title: 'Focus',
    description:
      'Sharpen your attention with ambient tones and eliminate distractions.',
    icon: '/icons/focus.png',
  }
];

function Features() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white" id="features">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Discover Your Inner World
        </h2>
        <p className="text-gray-500 mt-2">
          Destination of healing is worth the journey.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition text-center h-full flex flex-col justify-between">
              <img src={feature.icon} alt={feature.title} className="w-14 h-14 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Features;
