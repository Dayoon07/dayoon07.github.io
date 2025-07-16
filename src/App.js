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
            <div className="min-h-screen flex flex-col">
                <Header />
                
                <main className="flex-grow w-full py-8 md:flex mb-10">
                    <div className="md:w-[1280px] max-md:w-full max-md:p-4 mx-auto md:flex md:justify-between">
                        <aside className="max-md:mt-10">
                            <Profile />
                        </aside>
                        
                        <section className="flex-1 min-w-0 px-2">
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
                        </section>
                    </div>
                </main>
                
                <Footer />
            </div>
        </BrowserRouter>
    );
}