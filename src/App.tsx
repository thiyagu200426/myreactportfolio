import { Router } from './router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  const routes = [
    { path: '/', component: <Home /> },
    { path: '/about', component: <About /> },
    { path: '/projects', component: <Projects /> },
    { path: '/skills', component: <Skills /> },
    { path: '/certifications', component: <Certifications /> },
    { path: '/blog', component: <Blog /> },
    { path: '/contact', component: <Contact /> }
  ];

  const currentPath = window.location.pathname;
  if (currentPath.startsWith('/blog/')) {
    routes.push({ path: currentPath, component: <BlogPost /> });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Router routes={routes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
