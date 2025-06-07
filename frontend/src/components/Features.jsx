// src/components/Features.jsx
const features = [
  {
    title: "Eco-Friendly Products",
    description: "We use safe, non-toxic cleaning supplies to protect your family, pets, and the environment.",
    icon: "🌱",
  },
  {
    title: "Flexible Scheduling",
    description: "Book cleanings that fit your busy lifestyle—weekdays, weekends, or evenings.",
    icon: "📅",
  },
  {
    title: "Satisfaction Guarantee",
    description: "If you’re not happy, we’ll make it right. Your satisfaction is our top priority.",
    icon: "👍",
  },
];

export default function Features() {
  return (
    <section className="bg-blue-100 py-16 px-6 text-center" id="features">
      <h3 className="text-3xl font-bold mb-8 text-blue-800">Why Choose Us?</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-lg shadow-md p-8 flex-1"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
