import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import StarRating from "../StarRating/StarRating";

const reviews = [
  {
    name: "Sarah Johnson",
    country: "USA",
    img: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "Amazing service! The team helped us find the perfect home within budget. Highly recommended!",
  },
  {
    name: "Michael Lee",
    country: "Canada",
    img: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    text: "Professional, fast, and very friendly customer support. I love their real-estate service!",
  },
  {
    name: "Aisha Rahman",
    country: "Bangladesh",
    img: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    text: "Smooth experience! The property listing and support team exceeded my expectations.",
  },
  {
    name: "David Miller",
    country: "UK",
    img: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    text: "Great platform with lots of options. I found my dream apartment quickly!",
  },
  {
    name: "Emily Carter",
    country: "Australia",
    img: "https://i.pravatar.cc/150?img=12",
    rating: 4,
    text: "Very friendly team and detailed property information. Loved the experience.",
  },
  {
    name: "Hassan Al-Majid",
    country: "UAE",
    img: "https://i.pravatar.cc/150?img=20",
    rating: 5,
    text: "Perfect for luxury property searches—smooth, fast, and trustworthy.",
  },
  {
    name: "Lina Chowdhury",
    country: "India",
    img: "https://i.pravatar.cc/150?img=30",
    rating: 3,
    text: "Good service overall. A few listings needed more photos, but still helpful.",
  },
  {
    name: "Carlos Rivera",
    country: "Mexico",
    img: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "Customer support was top-notch! They guided me through every step.",
  },
];

export default function ClientReview() {
  return (
    <section className="px-6 py-14 mt-25 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Clients Say
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="flex items-center gap-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.country}</p>
                  </div>
                </div>

                <StarRating rating={review.rating} />

                <p className="mt-4 text-gray-700">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
