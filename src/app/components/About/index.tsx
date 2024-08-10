import "./style.css";
import Image from "next/image";
const About = ()=>{
    return(
<section className="welcome_area" id="about">
    <div className="container">
        <div className="row welcome_inner">
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                <div className="welcome_text">
                    <h4>About Myself</h4>
                    <p>Senior Software Engineer with 4+ years in web app development, specializing in Ruby on Rails and React. Skilled in building scalable, user-focused solutions and delivering high-quality software. Committed to leveraging technology to drive innovation and enhance user experiences. Let’s connect to achieve your project goals.</p>
                    <a href="#" className="btn btn-primary btn-rounded btn-default">Get In Touch</a>
                </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay=".6s">
                <div className="welcome_text">
                    <h4>Skills</h4>
                    <div className="d-flex flex-wrap skills-wrapper text-center">
                        <div className="skill-item wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                            <div className="skills-widget d-flex justify-content-center align-items-center">
                                <div className="icon-box">
                                    <img src="/images/icons/ruby.png" alt="Ruby Icon" width="70" height="70" />
                                </div>
                            </div>
                            <p>Ruby</p>
                        </div>
                        <div className="skill-item wow animate__animated animate__fadeIn" data-wow-delay=".8s">
                            <div className="skills-widget d-flex justify-content-center align-items-center">
                                <div className="icon-box">
                                    <img src="/images/icons/react.png" alt="React Icon" width="70" height="70" />
                                </div>
                            </div>
                            <p>React</p>
                        </div>
                        <div className="skill-item wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                            <div className="skills-widget d-flex justify-content-center align-items-center">
                                <div className="icon-box">
                                    <img src="/images/icons/next.png" alt="Next.js Icon" width="70" height="70" />
                                </div>
                            </div>
                            <p>Next.js</p>
                        </div>
                        <div className="skill-item wow animate__animated animate__fadeIn" data-wow-delay="1s">
                            <div className="skills-widget d-flex justify-content-center align-items-center">
                                <div className="icon-box">
                                    <img src="/images/icons/node.png" alt="Node.js Icon" width="70" height="70" />
                                </div>
                            </div>
                            <p>Node.js</p>
                        </div>
                        <div className="skill-item wow animate__animated animate__fadeIn" data-wow-delay="1.1s">
                            <div className="skills-widget d-flex justify-content-center align-items-center">
                                <div className="icon-box">
                                    <img src="/images/icons/mongo.png" alt="MongoDB Icon" width="70" height="70" />
                                </div>
                            </div>
                            <p>MongoDB</p>
                        </div>
                        <div className="skill-item wow animate__animated animate__fadeIn" data-wow-delay="1.2s">
                            <div className="skills-widget d-flex justify-content-center align-items-center">
                                <div className="icon-box">
                                    <img src="/images/icons/psql.png" alt="PostgreSQL Icon" width="70" height="70" />
                                </div>
                            </div>
                            <p>PostgreSQL</p>
                        </div>
                        <div className="skill-item wow animate__animated animate__fadeIn" data-wow-delay="1.3s">
                            <div className="skills-widget d-flex justify-content-center align-items-center">
                                <div className="icon-box">
                                    <img src="/images/icons/el.png" alt="Elastic Search Icon" width="70" height="70" />
                                </div>
                            </div>
                            <p>Elastic Search</p>
                        </div>
                        <div className="skill-item wow animate__animated animate__fadeIn" data-wow-delay="1.4s">
                            <div className="skills-widget d-flex justify-content-center align-items-center">
                                <div className="icon-box">
                                    <img src="/images/icons/aws.png" alt="AWS Icon" width="70" height="70" />
                                </div>
                            </div>
                            <p>AWS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>






    )
}
export default About;