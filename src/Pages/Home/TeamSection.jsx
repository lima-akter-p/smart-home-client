import { useEffect, useRef } from "react";

export default function TeamSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    let scrollAmount = 0;

    const slide = () => {
      if (!slider) return;

      scrollAmount += 1;
      slider.scrollLeft = scrollAmount;

      // reset loop
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      }
    };

    const interval = setInterval(slide, 20); // speed

    return () => clearInterval(interval);
  }, []);

  const team = [
    {
      name: "Sarah Ahmed",
      role: "Senior Real Estate Consultant",
      img: "https://i.ibb.co.com/S7DfPvcG/Screenshot-2026-01-03-193609.png"
    },
    {
      name: "Rahim Khan",
      role: "Property Advisor",
      img: "https://i.ibb.co.com/Q3gKC8Sx/Screenshot-2026-01-03-193727.png"
    },
    {
      name: "Anika Chowdhury",
      role: "Commercial Property Expert",
      img: "https://i.ibb.co.com/ym6xcYxf/Screenshot-2026-01-03-193634.png"
    },
    {
      name: "Hasan Ali",
      role: "Luxury Property Specialist",
      img: "https://i.ibb.co.com/VWSvYgDm/Screenshot-2026-01-03-193811.png"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-10">
      <h2 className="text-3xl font-bold text-center">Meet Our Agents</h2>
      <p className="text-center text-gray-600 mt-2">
        Professional agents ready to help you find your dream home
      </p>

      <div
        ref={sliderRef}
        className="mt-8 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {team.map((agent, index) => (
          <div
            key={index}
            className="min-w-[260px] bg-white rounded-2xl shadow-md p-4"
          >
            <img
              src={agent.img}
              alt={agent.name}
              className="w-full h-48 object-cover rounded-xl"
            />

            <h3 className="text-lg font-semibold mt-3 text-gray-800">
              {agent.name}
            </h3>

            <p className="text-blue-600 text-sm">{agent.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


// export default function TeamSection() {
//   const team = [
//     { name: "Sarah Ahmed", role: "Senior Real Estate Consultant" },
//     { name: "Rahim Khan", role: "Property Advisor" },
//     { name: "Anika Chowdhury", role: "Commercial Property Expert" }
//   ];

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-center">Meet Our Agents</h2>
//       <p className="text-center text-gray-600 mt-2">
//         Professional and friendly agents ready to help you.
//       </p>

//       <div className="grid md:grid-cols-3 gap-6 mt-8">
//         {team.map((agent, index) => (
//           <div key={index} className="p-5 border rounded-2xl shadow">
//             <div className="w-full h-52 bg-gray-200 rounded-xl mb-4" />
//             <h3 className="text-xl font-semibold">{agent.name}</h3>
//             <p className="text-blue-500 text-sm">{agent.role}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
