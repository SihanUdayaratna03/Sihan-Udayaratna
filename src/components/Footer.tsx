import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/sihan-udayaratna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/SihanUdayaratna03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <FaGithub size={20} />
          </a>
        </div>
        <p className="text-gray-600 text-[11px] uppercase tracking-widest font-semibold">
          &copy; {new Date().getFullYear()} Sihan Udayaratna. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
