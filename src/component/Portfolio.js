import React, { useState } from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/style-switcher.css';
import '../assets/css/skins/color-1.css';
// import '../assets/css/skins/color-2.css';
// import '../assets/css/skins/color-3.css';
// import '../assets/css/skins/color-4.css';
// import '../assets/css/skins/color-5.css';
import '../assets/js/script';


import project_1 from '../assets/img/project-1.jpeg';
import project_2 from '../assets/img/project-2.jpg';
import project_3 from '../assets/img/project-3.jpeg';
import project_4 from '../assets/img/project-4.jpeg';
import project_5 from '../assets/img/project-5.jpg';
import project_6 from '../assets/img/project-6.jpg';

// Simple Tabs component
const Tabs = ({ tabsList, children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs-container padd-15" style={{ width: '100%' }}>
            <div className="tabs-header" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexDirection: 'row', overflowX: 'auto', overflowY: 'hidden', WebkitOverflowScrolling: 'touch', padding: '1rem 0', border: 'none', scrollSnapType: 'x mandatory' }}>

                {tabsList.map((tab, idx) => (
                    <button
                        key={tab}
                        className={`tab-btn${activeTab === idx ? ' active' : ''}`}
                        style={{
                            padding: '10px 30px',
                            flex: '0 0 auto',
                            whiteSpace: 'nowrap',
                            fontSize: '14px',
                            borderRadius: '10px',
                            border: 'none',
                            background: activeTab === idx ? '#ec1839' : '#fdf9ff',
                            color: activeTab === idx ? '#fff' : '#302e4d',
                            cursor: 'pointer',
                            fontWeight: 500
                        }}
                        onClick={() => setActiveTab(idx)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="tabs-content">
                {React.Children.toArray(children)[activeTab]}
            </div>
        </div>
    );
};

const allProjects = [
    { src: project_1, alt: 'Project-1', link: '#' },
    { src: project_2, alt: 'Project-2', link: '#' },
    { src: project_3, alt: 'Project-3', link: '#' },
    { src: project_4, alt: 'Project-4', link: '#' },
    { src: project_5, alt: 'Project-5', link: '#' },
    { src: project_6, alt: 'Project-6', link: '#' },
];

// Example: filter projects for each tab (customize as needed)
const basicProjects = [allProjects[0], allProjects[1]];
const shopifyProjects = [allProjects[2], allProjects[3]];
const reactProjects = [allProjects[4], allProjects[5]];

const Portfolio = () => {
    const tabsList = ['All', 'Basic', 'Shopify Theme', 'React'];

    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h2>My Latest Projects: </h2>
                    </div>
                </div>
                <div className="row">
                    <Tabs tabsList={tabsList}>
                        {/* Tab 1: All Projects */}
                        <div className="portfolio-grid">
                            {allProjects.map((proj) => (
                                <a
                                    key={proj.alt}
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-item"
                                >
                                    <div className="portfolio-item-inner shadow-dark">
                                        <div className="portfolio-img">
                                            <img src={proj.src} alt={proj.alt} />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        {/* Tab 2: Basic Projects */}
                        <div className="portfolio-grid">
                            {basicProjects.map((proj) => (
                                <a
                                    key={proj.alt}
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-item"
                                >
                                    <div className="portfolio-item-inner shadow-dark">
                                        <div className="portfolio-img">
                                            <img src={proj.src} alt={proj.alt} />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        {/* Tab 3: Shopify Theme Projects */}
                        <div className="portfolio-grid">
                            {shopifyProjects.map((proj) => (
                                <a
                                    key={proj.alt}
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-item"
                                >
                                    <div className="portfolio-item-inner shadow-dark">
                                        <div className="portfolio-img">
                                            <img src={proj.src} alt={proj.alt} />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        {/* Tab 4: React Projects */}
                        <div className="portfolio-grid">
                            {reactProjects.map((proj) => (
                                <a
                                    key={proj.alt}
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-item"
                                >
                                    <div className="portfolio-item-inner shadow-dark">
                                        <div className="portfolio-img">
                                            <img src={proj.src} alt={proj.alt} />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
