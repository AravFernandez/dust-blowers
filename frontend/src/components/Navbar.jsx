import logo from '../assets/logo.png'; 

export default function Navbar() {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <img src={logo} alt="Dust Blowers Logo" className="h-10 w-auto mr-3" />
        <span className="font-bold text-xl text-blue-700">Dust Blowers</span>
      </div>
      <ul className="flex space-x-6">
        <li><a href="#features" className="hover:underline">Features</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
        <li><a href="#faq" className="hover:underline">FAQ</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
