import Organized from "../../Organized/Organized";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Progress from "../Progress/Progress";
import Occopation from "../occupation/Occopation";


const Home = () => {
    return (
        <div className="bg-gray-200">
            <Banner></Banner>
            <Organized></Organized>
            <Occopation></Occopation>
            <Progress></Progress>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;