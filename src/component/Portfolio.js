import React, { useState } from 'react';
import '../assets/css/style.css';
import '../assets/css/style-switcher.css';
import '../assets/css/skins/color-1.css';
// import '../assets/css/skins/color-2.css';
// import '../assets/css/skins/color-3.css';
// import '../assets/css/skins/color-4.css';
// import '../assets/css/skins/color-5.css';

// Basic projects
import calculator from '../assets/img/Projects_basic/calculator.png';
import currency_convertor from '../assets/img/Projects_basic/currency_convertor.png';
import Digital_clock from '../assets/img/Projects_basic/digital_clock.png';
import Weather_Web_App from '../assets/img/Projects_basic/weather_web_app.png';

// Shopify projects
import aroma from '../assets/img/Projects_shopify/Aroma.png';
import petstore from '../assets/img/Projects_shopify/Pet_Store.png';

// PHP projects
import guestbook from '../assets/img/Projects_php/guestbook.png';

// Add missing basic project images to allProjects
const allProjects = [
    { src: calculator, alt: 'Calculator', link: 'https://tausif148.github.io/My-calculator/' },
    { src: currency_convertor, alt: 'Currency Convertor', link: 'https://tausif148.github.io/My-currency-convertor/' },
    { src: Digital_clock, alt: 'Digital Clock', link: 'https://tausif148.github.io/My-digital-clock/' },
    { src: Weather_Web_App, alt: 'Weather Web App', link: 'https://tausif148.github.io/My-weather-app/' },
    { src: aroma, alt: 'Aroma', link: 'https://aroma-demo.myshopify.com/' },
    { src: petstore, alt: 'Pet Store', link: 'https://heavnn.myshopify.com/' },
    { src: guestbook, alt: 'Guestbook', link: 'http://guestbook.infinityfreeapp.com/' }
];

// Example: filter projects for each tab (customize as needed)
const jsProjects = allProjects.slice(0, 4);
const shopifyProjects = allProjects.slice(4, 6);
const phpProjects = allProjects.slice(6, 7);

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

const Portfolio = () => {
    const tabsList = ['All', 'Javascript', 'Shopify themes', 'PHP '];

    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading">
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
                            {jsProjects.map((proj) => (
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
                        {/* Tab 4: php Projects */}
                        <div className="portfolio-grid">
                            {phpProjects.length === 0 ? (
                                <p>No PHP projects available.</p>
                            ) : (
                                phpProjects.map((proj) => (
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
                                ))
                            )}
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;