import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>AAAAAAAAAAAAAAAAAAAA Home</h1>
            <button onClick={() => navigate('/layout/5465346456456')}>Go to About layout</button>
        </div>
    );
};

export default HomePage;
