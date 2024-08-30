import Header from "../../common/Header";
import Hero from "../home/Hero";
import Form from "../home/Form";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import SwiperSlider from "../home/SwiperSlider";
const Home = () => {
    return (
        <>
            <Navbar />
            <Header className="bg-lineargradiant" />
            <Hero />
            <SwiperSlider />
            {/* <Form /> */}
            <Footer />
        </>
    )
}
export default Home