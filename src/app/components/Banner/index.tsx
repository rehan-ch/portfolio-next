import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './style.css';
const Banner = ()=>{
    return(
        <section className="home_banner_area">
            <div className="container box_1620">
                    <div className="banner_inner d-flex align-items-center">
                    <div className="banner_content">
                        <div className="media">
                            <div className="d-flex">
                                <Image src="/images/personal.jpg" alt="Personale" width={500} height={500} />
                            </div>
                            <div className="media-body">
                                <div className="personal_text">
                                    <h6>Hello Everybody, i am</h6>
                                    <h3>Muhammad Rehan</h3>
                                    <h4>Senior Software Engineer</h4>
                                    <p>Turning Complex Problems into Elegant Solutions</p>
                                    <ul className="list basic_info">
                                        <li><a href="#"><i className="lnr lnr-phone-handset"></i><FontAwesomeIcon icon={faPhone} /> +92 304 6296973</a></li>
                                        <li><a href="#"><i className="lnr lnr-envelope"></i><FontAwesomeIcon icon={faEnvelope} />  rehanch642@gmail.com</a></li>
                                        <li><a href="#" className='btn btn-primary btn-rounded contact-btn'>Download CV</a></li>
                                    </ul>
                                    <ul className="list personal_social">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;