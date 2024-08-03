import Header from "../Header";
import Banner from "../Banner";
import About from "../About";
import ExperienceEducation from "../ExperienceEducation"
// import Services from "../Services";
import Projects from "../Projects";
import Testimonials from "../Testimonials";
import Footer from "../Footer";



import "./style.css";

const Main = ()=>{
    return(
        <>
            <Header />
            <Banner/>
            <About/>
            <ExperienceEducation />
            {/* <Services /> */}
            <Projects />
            {/* <Testimonials /> */}
            <Footer />
        </>
    )
}
export default Main;