import Header from "../../common/Header";
import Hero from "../home/Hero";
import Form from "../home/Form";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Hero clasName='bg-lineargradiant'/>
            <Form />
            <Footer />
        </>
    )
}

export default Home