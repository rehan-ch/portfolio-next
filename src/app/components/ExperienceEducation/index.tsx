"use client"
import { useState } from "react";
import Education from "../Education/inex";
import Experience from "../Experience";

const ExperienceEducation = ()=>{
    const [activeTab, setActiveTab] = useState('experience')
    return(
        <section className="mytabs_area p_50" id="experience">
            <div className="container">
                <div className="tabs_inner">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className={`nav-link active ${activeTab === 'experience' && 'btn-primary'}`} onClick={()=> setActiveTab("experience")}>
                                My Experiences
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link btn ${activeTab === 'education' && 'btn-primary'}`} onClick={()=> setActiveTab("education")}>
                                My Education
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        {activeTab === 'experience' ?
                            (< Experience activeTab={activeTab} />)
                            :
                            (< Education activeTab={activeTab} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExperienceEducation;