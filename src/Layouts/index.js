import { lazy } from 'react';

const Footer = lazy(() => import(/* webpackChunkName: "layouts/footer" */'./Footer/Footer'));
const Header = lazy(() => import(/* webpackChunkName: "layouts/header" */'./Header/Header'));
const Layout = lazy(() => import(/* webpackChunkName: "layouts/layout" */'./Layout/Layout'));

export {
    Footer,
    Header,
    Layout,
};
