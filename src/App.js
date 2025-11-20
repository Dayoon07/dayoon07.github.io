import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Profile from './components/Profile';
import NotFound from './pages/Wow404Error';
import Project from './pages/Project';
import Architecture from './pages/Architecture';
import SiteMap from './pages/SiteMap';
import CV from './pages/Cv';
import Portfolio from './pages/Portfolio';
import Skill from './pages/Skill';

export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="min-h-screen flex flex-col">
                <Header />
                
                <main className="flex-grow w-full py-8 lg:flex lg:mb-10">
                    <section className="lg:w-[1280px] max-lg:w-full max-lg:p-4 mx-auto lg:flex lg:justify-between">
                        <aside className="max-lg:mt-10">
                            <Profile />
                        </aside>
                        
                        <article className="flex-1 min-w-0 px-2">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/skill" element={<Skill />} />
                                <Route path="/project" element={<Project />} />
                                <Route path="/architecture" element={<Architecture />} />
                                <Route path="/cv" element={<CV />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/sitemap" element={<SiteMap />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </article>
                    </section>
                </main>
                
                <Footer />
            </div>
        </BrowserRouter>
    );
}