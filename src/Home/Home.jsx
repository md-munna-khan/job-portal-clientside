import Banner from "../router/pages/Banner";
import HotJobs from "./HotJobs";


const Home = () => {
    return (
        <div className="my-10">
           <Banner></Banner>
           <HotJobs></HotJobs>
        </div>
    );
};

export default Home;