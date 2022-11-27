import { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface AboutPageProps {}

const AboutPage: FunctionComponent<AboutPageProps> = () => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage('The number is: ' + number);
        } else {
            setMessage('No number');
        }
    }, []);

    return (
        <div>
            <h1>ABOUT!!!!!!!!!</h1>
            <p>{message}</p>
        </div>
    );
};

export default AboutPage;
