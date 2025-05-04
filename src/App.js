import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Skill from './pages/Skill';
import Profile from './components/Profile';
import NotFound from './pages/Wow404Error';
import Projects from './pages/Projects';
import Architecture from './pages/Architecture';
import SiteMap from './pages/SiteMap';
import CV from './pages/Cv';
import Portfolio from './pages/Portfolio';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main className="md:max-w-screen-xl max-md:w-full mx-auto px-4 py-8 md:pt-20 md:flex">
        <div className="w-60 max-md:mt-10">
          <Profile />
        </div>
        <div className="md:max-w-screen-xl max-md:w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

