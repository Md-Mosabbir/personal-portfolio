import { Github, Linkedin, MessageCircle, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">Mosabbir Khan</h2>
          <p className="text-xl text-gray-400">
            Full-Stack Developer — Building scalable web experiences.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 mb-12">
          <a
            href="mailto:mosabbir@example.com"
            className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors"
          >
            <Mail size={24} />
            <span>mosabbir@example.com</span>
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mosabbirkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mosabbirkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://facebook.com/mosabbirkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Mosabbir Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
