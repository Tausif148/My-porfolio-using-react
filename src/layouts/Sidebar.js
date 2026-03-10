import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sections }) => {

    const [activeSection, setActiveSection] = useState('home');

    // Function to handle the toggle click
    const handleToggleClick = () => {
        const aside = document.querySelector('.aside');
        aside.classList.toggle('open');
    };

    // Smooth scroll and set active section
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setActiveSection(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Listen to scroll and update active section
    useEffect(() => {
        const handleScroll = () => {
            let found = false;
            for (const sec of sections) {
                const el = document.getElementById(sec.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 80 && rect.bottom > 80) {
                        setActiveSection(sec.id);
                        found = true;
                        break;
                    }
                }
            }
            if (!found) setActiveSection('home');
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="aside">
                <div className='logo'>

                    <Link to="/My-porfolio-using-react/" ><span>T</span>ausif</Link>
                    {/* <a href='#home'><span>T</span>ausif</a> */}
                </div>

                <div className='nav-toggler' onClick={handleToggleClick}>
                    <span></span>
                </div>

                <ul className='nav'>
                    {sections.map((sec) => (
                        <li key={sec.id}>
                            <a
                                href={`#${sec.id}`}
                                className={activeSection === sec.id ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, sec.id)}
                            >
                                <i className={`fa ${sec.icon}`}></i> {sec.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='socials'>
                    <a className='social_icon' href='https://www.instagram.com/sk.tausif_19' target="_blank" rel="noopener noreferrer">
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a className='social_icon' href='https://linkedin.com/in/tausifsheikh19/' target="_blank" rel="noopener noreferrer">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a className='social_icon' href='https://github.com/Tausif148/' target="_blank" rel="noopener noreferrer">
                        <i className='fa-brands fa-github'></i>
                    </a>
                    <a className='social_icon' href='https://wa.me/+918793194591' target="_blank" rel="noopener noreferrer">
                        <i className='fa-brands fa-whatsapp'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;


