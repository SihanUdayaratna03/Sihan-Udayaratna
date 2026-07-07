import StaggeredMenu from './components/ui/StaggeredMenu';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home', link: '#home' },
  { label: 'Profile', ariaLabel: 'View profile', link: '#profile' },
  { label: 'Skills', ariaLabel: 'View skills', link: '#skills' },
  { label: 'Experience', ariaLabel: 'View experience', link: '#experience' },
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={['#B497CF', '#5227FF']}
        logoUrl="/profile.jpg"
        accentColor="#5227FF"
        isFixed={true}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
