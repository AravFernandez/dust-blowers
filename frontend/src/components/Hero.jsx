export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-20 px-6 text-center flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-4 text-blue-900">
        Spotless Spaces, Happy Faces
      </h1>
      <p className="text-xl mb-8 text-blue-800 max-w-2xl">
        Professional, eco-friendly cleaning for homes and offices. Experience the Dust Blowers difference today!
      </p>
      <a
        href="#contact"
        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Get a Free Quote
      </a>
    </section>
  );
}
