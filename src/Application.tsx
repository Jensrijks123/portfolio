import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import MailAI from './pages/MailAiPage/MailAI';
import NotFound from './pages/NotFoundPage/NotFound';

interface ApplicationProps {}

const Application: FunctionComponent<ApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="layout" element={<Layout />}>
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="mail-ai" element={<MailAI />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
