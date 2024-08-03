import Image from "next/image";
const Header = ()=>{
    return (
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container box_1620">
                        <a className="navbar-brand logo_h" href="index.html">
                            <Image src="/images/logo.png" alt="Personale" width={50} height={20} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li> 
                                <li className="nav-item"><a className="nav-link" href="#about">About</a></li> 
                                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li> 
                                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li> 
                                <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                                
                            </ul>
                        </div> 
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;