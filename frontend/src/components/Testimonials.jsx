// src/components/Testimonials.jsx
const testimonials = [
  {
    name: "Priya S.",
    feedback: "Dust Blowers transformed my home! The team was punctual, professional, and left everything spotless.",
  },
  {
    name: "Rahul M.",
    feedback: "Excellent service for my office. Reliable, thorough, and friendly staff. Highly recommend!",
  },
  {
    name: "Anita K.",
    feedback: "I booked a deep cleaning and was amazed by the results. Will definitely use them again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-16 px-6 text-center" id="testimonials">
      <h3 className="text-3xl font-bold mb-8 text-blue-800">What Our Clients Say</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-lg shadow p-8 flex-1 border border-blue-100"
          >
            <p className="italic text-gray-700 mb-4">&ldquo;{t.feedback}&rdquo;</p>
            <div className="font-semibold text-blue-700">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
