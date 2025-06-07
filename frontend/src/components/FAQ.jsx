// src/components/FAQ.jsx
const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We provide cleaning services across the city and surrounding suburbs. Contact us to check if we serve your area!",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "No, our team brings all the necessary eco-friendly cleaning products and equipment.",
  },
  {
    question: "Can I book a one-time cleaning?",
    answer: "Absolutely! We offer both one-time and recurring cleaning services to fit your needs.",
  },
  {
    question: "How do I pay for the service?",
    answer: "We accept cash, credit/debit cards, and UPI payments after the service is completed.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 px-6" id="faq">
      <h3 className="text-3xl font-bold mb-8 text-blue-800 text-center">Frequently Asked Questions</h3>
      <div className="max-w-2xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h4 className="font-semibold text-lg text-blue-700 mb-2">{faq.question}</h4>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
