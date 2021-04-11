import React from 'react';
import './About.css';


function About(){
    return(
        <section id="about">
            <div className="container-about">{/*check className = "container". it gets affected by previous page*/}
                <div className="coming-soon">
                <h1 className="responsive-headline">Coming Soon</h1>
                </div>
            </div>
        </section>
    )
}
    
export default About;