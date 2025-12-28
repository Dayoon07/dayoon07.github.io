import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Profile from './components/profile/Profile';
import NotFound from './pages/etc/Wow404Error';
import Project from './pages/tab/Project';
import Architecture from './pages/tab/Architecture';
import SiteMap from './pages/etc/SiteMap';
import CV from './pages/tab/Cv';
import Portfolio from './pages/tab/Portfolio';
import Skill from './pages/tab/Skill';
import { ROUTE } from './constants/Route';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

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
                                <Route path={ROUTE.HOME}            element={<HomePage      />} />
                                <Route path={ROUTE.SKILL}           element={<Skill         />} />
                                <Route path={ROUTE.PROJECT}         element={<Project       />} />
                                <Route path={ROUTE.ARCHITECTURE}    element={<Architecture  />} />
                                <Route path={ROUTE.CV}              element={<CV            />} />
                                <Route path={ROUTE.PORTFOLIO}       element={<Portfolio     />} />
                                <Route path={ROUTE.SITEMAP}         element={<SiteMap       />} />
                                <Route path={ROUTE.WILD_CARD}       element={<NotFound      />} />
                            </Routes>
                        </article>
                    </section>
                </main>
                
                <Footer />
            </div>
        </BrowserRouter>
    );
}