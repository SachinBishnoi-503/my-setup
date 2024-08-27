import Header from "../../common/Header";
import Hero from "../home/Hero";
import Form from "../home/Form";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header className="bg-lineargradiant" />
            <Hero />
            <Form />
            <Footer />
        </>
    )
}

export default Home