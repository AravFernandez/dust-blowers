// src/components/Services.jsx
const services = [
  {
    title: "Home Cleaning",
    description: "Thorough cleaning for your entire home, including bedrooms, bathrooms, kitchen, and living areas.",
    icon: "🏠",
  },
  {
    title: "Office Cleaning",
    description: "Professional cleaning for offices and workplaces, tailored to your business needs.",
    icon: "🏢",
  },
  {
    title: "Deep Cleaning",
    description: "Intensive cleaning for a sparkling fresh environment—perfect for move-ins, move-outs, or spring cleaning.",
    icon: "🧽",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white text-center" id="services">
      <h3 className="text-3xl font-bold mb-8 text-blue-800">Our Services</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-blue-50 rounded-lg shadow-md p-8 flex-1"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
