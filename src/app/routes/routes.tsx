import { RouteObject } from 'react-router-dom';
import { ROUTE } from '@/constants/Route';
import HomePage from '@/pages/home/HomePage';
import Skill from '@/pages/tab/Skill';
import Project from '@/pages/tab/Project';
import Architecture from '@/pages/tab/Architecture';
import CV from '@/pages/tab/Cv';
import SiteMap from '@/pages/etc/SiteMap';
import Portfolio from '@/pages/tab/Portfolio';
import NotFound from '@/pages/etc/Wow404Error';

export const routes: RouteObject[] = [
    { path: ROUTE.HOME,         element: <HomePage      /> },
    { path: ROUTE.SKILL,        element: <Skill         /> },
    { path: ROUTE.PROJECT,      element: <Project       /> },
    { path: ROUTE.ARCHITECTURE, element: <Architecture  /> },
    { path: ROUTE.CV,           element: <CV            /> },
    { path: ROUTE.SITEMAP,      element: <SiteMap       /> },
    { path: ROUTE.PORTFOLIO,    element: <Portfolio     /> },
    { path: ROUTE.WILD_CARD,    element: <NotFound      /> },
];