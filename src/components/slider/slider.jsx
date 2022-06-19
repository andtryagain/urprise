import Slide from "../slide";

const Slider = ({items}) => {

    const slides = items.map((slide, index) => {
        return <Slide key={index} index={index} slide={slide}/>
    })

    return (
        <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {slides}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;