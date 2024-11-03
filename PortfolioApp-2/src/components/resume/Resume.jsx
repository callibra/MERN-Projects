import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const Resume = () => {
    const [tabResIndex, setTabResIndex] = useState(0);
    const [tabEduIndex, setTabEduIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <div className="max-container">
                <div className="resume__container">
                    <h3 className="section__title">Experience</h3>
                    <Tabs
                        className="tabs-res"
                        selectedIndex={tabResIndex}
                        onSelect={(index) => setTabResIndex(index)}
                        selectedTabClassName={"is-active"}
                        selectedTabPanelClassName={"is-active"}
                    >
                        <TabList className="tab__list">
                            {WorkExperience.map((experience) => {
                                const { id, company } = experience;
                                return (
                                    <Tab className="tab" key={`company-${id}`}>
                                        <Button>{company}</Button>
                                    </Tab>
                                );
                            })}
                        </TabList>

                        {WorkExperience.map((experience) => {
                            const { id, company, yearsActive, title, link, image, information } = experience;
                            return (
                                <TabPanel className="tab__panel" key={`panel-${id}`}>
                                    <h2 className="tab__panel-title">
                                        {title} @ {company}
                                    </h2>
                                    <p className="tab__panel-subtitle">{yearsActive}</p>
                                    
                                    {/* Render the image */}
                                    <img src={image} alt={`${title} at ${company}`} className="experience-image" />

                                    <ul className="tab__panel-list">
                                        {information.map((info, index) => (
                                            <li key={`info-${index}`}>{info}</li>
                                        ))}
                                    </ul>
                                    <div className="view-more">
                                        <a href={link} target="_blank" className="link" rel="noopener noreferrer">View More</a>
                                    </div>
                                </TabPanel>
                            );
                        })}
                    </Tabs>
                </div>
                {/* ///////////////////// Education /////////////////////////////////// */}
                <div className="education__container">
                    <h2 className="section__title">Education</h2>
                    <Tabs
                        className="tabs-edu"
                        selectedIndex={tabEduIndex}
                        onSelect={(index) => setTabEduIndex(index)}
                        selectedTabClassName={"is-active"}
                        selectedTabPanelClassName={"is-active"}
                    >
                        <TabList className="tab__list">
                            {Education.map((edu) => (
                                <Tab className="tab" key={`education-tab-${edu.id}`}>
                                    <Button>{edu.institution}</Button>
                                </Tab>
                            ))}
                        </TabList>

                        {Education.map((edu) => {
                            const { id, institution, degree, yearsAttended, link, image, details } = edu;
                            return (
                                <TabPanel className="tab__panel" key={`education-panel-${id}`}>
                                    <h2 className="tab__panel-title">
                                        {degree} @ {institution}
                                    </h2>
                                    <p className="tab__panel-subtitle">{yearsAttended}</p>
                                    
                                    {/* Render the image */}
                                    <img src={image} alt={`${degree} at ${institution}`} className="education-image" />

                                    <ul className="tab__panel-list">
                                        {details.map((detail, index) => (
                                            <li key={`education-detail-${id}-${index}`}>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="view-more">
                                        <a href={link} target="_blank" className="link" rel="noopener noreferrer">View More</a>
                                    </div>
                                </TabPanel>
                            );
                        })}
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Resume;

//////////////////////////////// 888 //////////////////////////////////////

