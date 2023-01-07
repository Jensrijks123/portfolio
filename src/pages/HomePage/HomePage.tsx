import { FunctionComponent, useRef, useState } from 'react';
import './HomePage.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import NavBar from '../../components/NavBar/NavBar';

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
    const pathRef = useRef(null);

    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const dashOffset = '2500px';
    const newUnit = parseInt(dashOffset, 10);

    const [svgStyle, setSvgStyle] = useState({
        strokeDashoffset: newUnit,
        strokeDasharray: newUnit
    });

    useScrollPosition(() => {
        const scrollBarPosition = window.pageYOffset | body.scrollTop;
        const innerHeight = window.innerHeight;

        const percentageComplete = (scrollBarPosition / (height - innerHeight)) * 100;

        const offsetUnit = percentageComplete * (newUnit / 100);

        const newStyle = {
            strokeDashoffset: newUnit - offsetUnit,
            strokeDasharray: newUnit
        };
        setSvgStyle(newStyle);
    });

    return (
        <>
            <NavBar title="Portfolio" />
            <div style={{ minHeight: '100vh', padding: '4rem' }}>
                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }} className="section-80">
                    <div>
                        <div className="svg-container">
                            <svg viewBox="0 0 300 300" version="1.1">
                                <g stroke="#e74c3c" stroke-width="4" fill="none">
                                    <path
                                        className="JR-SVG"
                                        ref={pathRef}
                                        style={{ ...svgStyle }}
                                        d="M36.32882,35.00295C46.87808,49.06864,63.3586,57.50301,81.23159,53.03477c5.05797-1.26449,29.12273-10.43393,30.05304-8.83913c5.76769,9.88747,5.19748,27.0481,7.42487,38.18503c10.61374,53.06869,10.86332,78.8272-.35356,131.17266-5.49058,25.6227-21.02197,37.54212-46.6706,35.71008-6.91891-.49421-13.07667-.70114-18.03182-6.36417-14.4454-16.50902-3.74128-48.58635,9.54626-61.87389c33.67512-33.67513,81.08034-42.57496,118.79788-70.00589c8.59959-6.25424,46.83171-40.75621,26.51738-50.91338-27.30761-13.65381-68.47197-1.90919-71.06659,31.82086-.37743,4.9066-1.12629,9.48493,1.41426,14.1426c7.76689,14.23931,30.8882,13.93352,44.5492,18.03182c22.8237,6.84711,49.68544,44.66393,41.01355,68.9452-5.10035,14.28097-22.68505,23.63176-35.00295,30.4066-33.49773,18.42375-64.66696,37.82056-101.47319,49.14555-7.34393,2.25967-43.7351,12.21988-48.79199,2.82852-28.46109-52.85631,79.18466-65.19892,106.4231-71.77372c11.42662-2.75815,22.54437-6.631,33.58869-10.60695c3.86008-1.38963,7.77939-2.59313,11.66765-3.88922c2.36915-.78972,9.27011-3.65893,7.0713-2.47495C148.20275,213.4468,94.18132,231.51266,42.33942,253.5062c-15.40222,6.53428-30.63459,13.46032-45.96346,20.15321-6.58055,2.8732-13.25163,5.53896-19.79965,8.48556-1.87696.84463-3.74031,1.72493-5.65704,2.47496-.799.31265-3.13409,1.25641-2.47496.70713c20.61757-17.18131,51.77557-27.52669,75.66293-38.5386c47.00618-21.66952,95.4197-41.45867,145.31526-55.50972c26.20972-7.3809,52.79554-13.65858,79.55215-18.73895c4.6675-.88623,11.69829-5.84168,14.1426-1.76782.52161.86935-1.61523,1.2305-2.47496,1.76782-2.91375,1.8211-5.79203,3.71555-8.83913,5.30348-5.32923,2.7772-10.7433,5.40453-16.26399,7.77843-39.23503,16.87107-81.11512,26.91454-121.97997,38.89216-20.86244,6.11485-41.83003,12.0988-62.93459,17.32469-5.27358,1.30584-10.62297,2.28722-15.91043,3.53565-3.19932.7554-6.34315,1.73578-9.54626,2.47496-1.39705.3224-4.24278,2.1409-4.24278.70713c0-1.63729,2.77002-1.75962,4.24278-2.47496c9.1167-4.42811,18.8468-8.02712,28.28521-11.66765c29.5066-11.38112,59.23499-22.81142,89.45197-32.17442c7.67851-2.37926,35.64118-14.94039,23.68886,0"
                                    />
                                </g>
                            </svg>
                        </div>
                        <h1>AAAAAAAAAAAAAAAAAAAA Home</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p id="tets">Lorem ipsum dolor sit amet.</p>
                        <h1>ROCKET!!!!!!!!!!!!!!!!!!!!!!</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
