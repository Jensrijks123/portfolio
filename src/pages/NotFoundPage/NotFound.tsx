import './NotFound.css';

const NotFound = () => {
    return (
        <div className="page-not-found">
            <div className="stars">
                <div className="central-body">
                    <p className="image-404">404 Page Not Found!</p>
                </div>
                <div className="objects">
                    <img className="object_rocket" src={require('./images/object_moon.png')} width="140" alt="rocket" />
                    <div className="box_astronaut">
                        <img className="object_astronaut" src={require('./images/object_astronaut.png')} width="140" alt="astronaut" />
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
