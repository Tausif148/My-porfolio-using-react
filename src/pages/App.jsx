//importing css and js
import '../assets/css/style.css'
import '../assets/css/style-switcher.css'




//importing component
import Sidebar from '../layouts/Sidebar'
import Home from '../component/Home';
import About from '../component/About'
import Experience from '../component/Experience';
// import Service from './component/Service';.
import Portfolio from '../component/Portfolio';
import Contact from '../component/Contact';
import Cursor from '../component/Cursor';
import BackToTop from '../component/BackToTop';
import StyleSwitcher from '../component/StyleSwitcher';

function App() {
    const sections = [
        { id: 'home', icon: 'fa-home', label: 'Home' },
        { id: 'about', icon: 'fa-user', label: 'About' },
        { id: 'experience', icon: 'fa-laptop-code', label: 'Experience' },
        // { id: 'services', icon: 'fa-list', label: 'Services' },
        { id: 'portfolio', icon: 'fa-briefcase', label: 'Portfolio' },
        { id: 'contact', icon: 'fa-comments', label: 'Contact' },
    ];

    return (
        <div className='main-container'>
            <Sidebar sections={sections} />

            <div className='main-content'>
                <Home />
                <About />
                <Experience />
                {/* <Service /> */}
                <Portfolio />
                <Contact />
                <StyleSwitcher />
                <Cursor />
                <BackToTop />

            </div>
        </div>
    )
}

export default App
