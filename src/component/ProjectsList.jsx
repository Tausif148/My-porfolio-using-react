
// vowelweb projects
import adorn from '../assets/img/Projects_shopify/adorn_theme.png';
import flaunt from '../assets/img/Projects_shopify/flaunt_theme.png';
import sundrift from '../assets/img/Projects_shopify/sundrift_theme.png';
import clear from '../assets/img/Projects_shopify/clear_theme.png';
import polish from '../assets/img/Projects_shopify/polish_theme.png';
import advance from '../assets/img/Projects_shopify/advance_theme.png';
import blocksy from '../assets/img/Projects_shopify/Blocksy.png';

// Codeosity projects
import guestbook from '../assets/img/Projects_php/guestbook.png';


// My projects
import calculator from '../assets/img/Projects_basic/calculator.png';
import currency_convertor from '../assets/img/Projects_basic/currency_convertor.png';
import Digital_clock from '../assets/img/Projects_basic/digital_clock.png';
import Weather_Web_App from '../assets/img/Projects_basic/weather_web_app.png';


// const steponeProjects = [

// ];


const vowelwebProjects = [
    { src: adorn, alt: 'Adorn', link: 'https://themes.shopify.com/themes/adorn' },
    { src: flaunt, alt: 'Flaunt', link: 'https://themes.shopify.com/themes/flaunt/presets/flaunt' },
    { src: sundrift, alt: 'Sundrift', link: 'https://themes.shopify.com/themes/flaunt/presets/sundrift' },
    { src: clear, alt: 'Clear', link: 'https://themes.shopify.com/themes/flaunt/presets/clear' },
    { src: polish, alt: 'Polish', link: 'https://themes.shopify.com/themes/flaunt/presets/polish' },
    { src: advance, alt: 'Advance', link: 'https://themes.shopify.com/themes/flaunt/presets/advance' },
    { src: blocksy, alt: 'blocksy', link: 'https://apps.shopify.com/blocksy-section-builder' },
];

const codeosityProjects = [
    { src: guestbook, alt: 'Guestbook', link: 'http://guestbook.infinityfreeapp.com/' },
];

const personalProjects = [
    { src: calculator, alt: 'Calculator', link: 'https://tausif148.github.io/My-calculator/' },
    { src: currency_convertor, alt: 'Currency Convertor', link: 'https://tausif148.github.io/My-currency-convertor/' },
    { src: Digital_clock, alt: 'Digital Clock', link: 'https://tausif148.github.io/My-digital-clock/' },
    { src: Weather_Web_App, alt: 'Weather Web App', link: 'https://tausif148.github.io/My-weather-app/' },
];


const ProjectsList = () => {
    return (
        <>
            {/* <section className="PorojectsList steponeProject section portfolio" id="stepone">
                <div className='container'>
                    <div className='row'>
                        <div className='section-title'>
                            <h2>Stepone</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="portfolio-grid">
                            {vowelwebProjects.map((proj) => (
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

                    </div>

                </div>
            </section> */}

            <section className="PorojectsList vowelwebProject section portfolio" id="vowelweb">
                <div className='container'>
                    <div className='row'>
                        <div className='section-title'>
                            <h2>Vowelweb</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="portfolio-grid">
                            {vowelwebProjects.map((proj) => (
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

                    </div>
                </div>
            </section>

            <section className="PorojectsList codeosityProject section portfolio" id="codeosity">
                <div className='container'>
                    <div className='row'>
                        <div className='section-title'>
                            <h2>Codeosity</h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="portfolio-grid">
                            {codeosityProjects.map((proj) => (
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

                    </div>

                </div>
            </section>

            <section className="projectsList personalProject section portfolio" id="personal">
                <div className='container'>
                    <div className='row'>
                        <div className='section-title'>
                            <h2>Personal</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="portfolio-grid">
                            {personalProjects.map((proj) => (
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

                    </div>

                </div>
            </section>
        </>
    )
}

export default ProjectsList
