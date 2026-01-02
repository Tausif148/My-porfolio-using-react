import React, { useState } from 'react';

// Basic projects
import calculator from '../assets/img/Projects_basic/calculator.png';
import currency_convertor from '../assets/img/Projects_basic/currency_convertor.png';
import Digital_clock from '../assets/img/Projects_basic/digital_clock.png';
import Weather_Web_App from '../assets/img/Projects_basic/weather_web_app.png';

// Shopify projects
import adorn from '../assets/img/Projects_shopify/adorn_theme.png';
import flaunt from '../assets/img/Projects_shopify/flaunt_theme.png';
import sundrift from '../assets/img/Projects_shopify/sundrift_theme.png';
import clear from '../assets/img/Projects_shopify/clear_theme.png';

// PHP projects
import guestbook from '../assets/img/Projects_php/guestbook.png';

const allProjects = [
    { src: guestbook, alt: 'Guestbook', link: 'http://guestbook.infinityfreeapp.com/' },
    { src: calculator, alt: 'Calculator', link: 'https://tausif148.github.io/My-calculator/' },
    { src: currency_convertor, alt: 'Currency Convertor', link: 'https://tausif148.github.io/My-currency-convertor/' },
    { src: Digital_clock, alt: 'Digital Clock', link: 'https://tausif148.github.io/My-digital-clock/' },
    { src: Weather_Web_App, alt: 'Weather Web App', link: 'https://tausif148.github.io/My-weather-app/' },
    { src: adorn, alt: 'Adorn', link: 'https://themes.shopify.com/themes/adorn' },
    { src: flaunt, alt: 'Flaunt', link: 'https://themes.shopify.com/themes/flaunt/presets/flaunt' },
    { src: sundrift, alt: 'Sundrift', link: 'https://themes.shopify.com/themes/flaunt/presets/sundrift' },
    { src: clear, alt: 'Clear', link: 'https://themes.shopify.com/themes/flaunt/presets/clear' },
];

// Example: filter projects for each tab (customize as needed)
const phpProjects = allProjects.slice(0, 1);
const jsProjects = allProjects.slice(1, 5);
const shopifyProjects = allProjects.slice(5, 10);

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
    const tabsList = ['All', 'Javascript', 'PHP ', 'Shopify themes'];

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
                        {/* Tab 3: php Projects */}
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
                        {/* Tab 4: Shopify Theme Projects */}
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

                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;