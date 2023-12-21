import Organized from "../../Organized/Organized";
import Banner from "../Banner/Banner";
import Progress from "../Progress/Progress";


const Home = () => {
    return (
        <div className="bg-gray-200">
            <Banner></Banner>
            <Organized></Organized>
            <Progress></Progress>
        </div>
    );
};

export default Home;