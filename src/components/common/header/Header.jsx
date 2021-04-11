import React, {useState, useEffect} from 'react';
import './Header.css';
import { FaGithub,FaLinkedin, FaFileDownload } from "react-icons/fa"

/*export default class Header extends React.Component{
     
    render(){
        return(
            <header id="home">
                <div className="navbar" >
                    <nav className="navigationBar">
                        <ul>
                            <li><a className="active" href="#home">Home</a></li>
                            <li><a href="#resume">Resume</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="container">
                    <div className="banner-icon">
                        <h1>&lt;</h1>
                    </div>
                    <div className="banner-text">
                        <div className="inner-text">
                            <h1 className="responsive-headline">I am Sew Thee Sien</h1>
                            <h3>Welcome to my portfolio. A quick intro about me. I have a degree in Computer Science. I like to learn and develop applications in various parts of software development. In my free time, I like to keep up to date on the latest technologies, play some video games and compost food scraps.</h3>
                            <hr/>
                            <ul className="social">
                                <li><a><FaGithub/></a></li>
                                <li><a href="https://www.linkedin.com/in/thee-sien-sew-17063b16b/"><FaLinkedin/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner-icon-bottom">
                    <h1>/&gt;</h1>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}*/

function Header(){
    const [navigationBar,setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <header id="home">
            <div className="navbar">
                <nav className={navigationBar ? 'navigationBar active' : 'navigationBar'}>
                    <ul id="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#timeline">Timeline</a></li>
                        <li><a className="smoothscroll" href="#about">Coming soon</a></li>
                    </ul>
                </nav>
            </div>
            <div className="container-banner">
                <div className="banner-icon">
                    <h1>&lt;</h1>
                </div>
                <div className="banner-text">
                    <div className="inner-text">
                        <h1 className="responsive-headline">I am Sew Thee Sien</h1>
                        <h3>Welcome to my portfolio. A quick intro about me. I have a degree in Computer Science. I like to learn and develop applications in various parts of software development. In my free time, I like to keep up to date on the latest technologies, play some video games and compost food scraps.</h3>
                        <hr/>
                        <ul className="social">
                            <li><a href="https://github.com/lessthanthreelessthanthree"><FaGithub/></a></li>
                            <li><a href="https://www.linkedin.com/in/thee-sien-sew-17063b16b/"><FaLinkedin/></a></li>
                        </ul>
                        <p>
                            <a className="button-download" href="https://docs.google.com/uc?export=download&id=1mQ9WubfhkvCYFXm7n1dlNlmqQj6seZdd" download><i className="icon download"><FaFileDownload/></i>Download Resume</a>
                        </p>
                    </div>
                </div>
                <div className="banner-icon-bottom">
                <h1>/&gt;</h1>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#timeline"><i className="icon-down-circle"></i></a>
            </p>
        </header>
    )
}

export default Header;