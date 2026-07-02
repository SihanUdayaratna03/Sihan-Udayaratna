const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sihan Udayaratna. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
