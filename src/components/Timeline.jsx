import React from 'react';
import './Timeline.css';
import { FaUserGraduate, FaBriefcase } from "react-icons/fa"

function Timeline(){
    return(
        <section id="timeline">
            <div className="timeline">
                <div className="container left">
                    <div className="date">Jan 2014 - Jun 2015</div>
                    <i className="icon uni"><FaUserGraduate/></i>
                    <div className="content">
                    <h2>Methodist College Kuala Lumpur - Student</h2>
                    <p>
                        Completed GCE Advanced Level. Subjects taken include Chemistry, Physics and Mathematics. 
                    </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="date">Sep 2015 - Dec 2015</div>
                    <i className="icon work"><FaBriefcase/></i>
                    <div className="content">
                    <h2>Sudong Sdn Bhd - Customer Service Officer</h2>
                    <p>
                        Worked as Customer Officer resolving inquiries, issues and complaints, regarding telco subscription plans from customers
                    </p>
                    </div>
                </div>
                <div className="container left">
                    <div className="date">Jan 2016 - Dec 2018</div>
                    <i className="icon uni"><FaUserGraduate/></i>
                    <div className="content">
                    <h2>Sunway University - Student</h2>
                    <p>
                        Completed undergraduate bachelor's degree in Computer Science.
                    </p><br/>
                    <h2>Sistem RKK Sdn Bhd - Intern Web Dev</h2>
                    <p>
                        Involved in web development projects. Exposure to Microsoft Sharepoint and Nintex Workflow. Coding using HTML, CSS and Javascript.
                    </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="date">Apr 2019 - Present</div>
                    <i className="icon work"><FaBriefcase/></i>
                    <div className="content">
                    <h2>NCR Corporation - Professional Service Technical Consultant</h2>
                    <p>
                        Software development and integration with client's requirements for ATM/Self-Service Banking solutions. Development of transaction screens and flows using HTML, CSS and Javascript.<br/> Testing and quality assurance to ensure application behaves as per functional specifications
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline;