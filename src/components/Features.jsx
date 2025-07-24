import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const features = [
  {
    title: 'Healing',
    description:
      'Calm your mind and rediscover your inner strength and peace.',
    icon: '/images/logo.png',
  },
  {
    title: 'Relaxation',
    description:
      'Let your body and mind settle into deep serenity and satisfaction.',
    icon: '/images/logo.png',
  },
  {
    title: 'Chillout',
    description:
      'Ease tension and stress with music that helps you breathe and smile again.',
    icon: '/images/logo.png',
  },
  {
    title: 'Focus',
    description:
      'Sharpen your attention with ambient tones that eliminate distractions.',
    icon: '/images/logo.png',
  },
  {
    title: 'Mindful Calm',
    description:
      'Meditative soundscapes for a peaceful, focused mind.',
    icon: '/images/logo.png',
  },
];

function Features() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-blue-50" id="features">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-bold text-blue-950 mb-4">
          Discover Your Inner World
        </h2>
        <p className="text-blue-900 text-lg">
          Your journey of healing begins here.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-blue-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-5 shadow-sm">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-950 mb-3">{feature.title}</h3>
              <p className="text-black text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Features;
