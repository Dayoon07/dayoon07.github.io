import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Profile from '@/components/profile/Profile';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow w-full py-8 lg:flex lg:mb-10">
                <section className="lg:w-[1280px] max-lg:w-full max-lg:p-4 mx-auto lg:flex lg:justify-between">
                    <aside className="max-lg:mt-10">
                        <Profile />
                    </aside>
                    <article className="flex-1 min-w-0 px-2">
                        <Outlet />
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}