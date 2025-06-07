// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Dust Blowers. All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-4 md:mt-0 space-x-6 text-sm font-medium text-gray-500">
          <li>
            <a href="#about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="#services" className="hover:underline">Services</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
