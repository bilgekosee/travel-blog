import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Category.css";

const categories = [
  { title: "Solo Travel", image: "/solo.png" },
  { title: "Mount Travel", image: "/mount.png" },
  { title: "Jungle Travel", image: "/jungal.png" },
  { title: "Road Travel", image: "/road.png" },
  { title: "Ocean Travel", image: "/osean.png" },
  { title: "Old City Travel", image: "/oldCity.png" },
];

const Category = () => {
  return (
    <section id="category">
      <div className="category-container">
        <div className="category-header-title">Choose A Category</div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="category-card">
                <img src={category.image} alt={category.title} />
                <h3>{category.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
