import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFound';
import MailAi from './pages/MailConverterAiPage/MailConverterAi';
import TextAi from './pages/TextAiPage/TextAi';
import ImageAi from './pages/ImageAiPage/ImageAi';
import Layout from './components/Layout/Layout';

interface ApplicationProps {}

const Routing: FunctionComponent<ApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="mail-ai" element={<MailAi />} />
                <Route path="text-ai" element={<TextAi />} />
                <Route path="image-ai" element={<ImageAi />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

const Application: FunctionComponent<ApplicationProps> = () => {
    return (
        <Layout>
            <Routing />
        </Layout>
    );
};

export default Application;
