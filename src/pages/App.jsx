//importing css and js
import '../assets/css/style.css'
import '../assets/css/style-switcher.css'

//  style switcher
import '../assets/css/skins/color-1.css'
// import './assets/css/skins/color-2.css'
// import './assets/css/skins/color-3.css'
// import './assets/css/skins/color-4.css'
// import './assets/css/skins/color-5.css'

//importing component
import Sidebar from '../layouts/Sidebar'
import Home from '../component/Home';
import About from '../component/About'
import Experience from '../component/Experience';
// import Service from './component/Service';
import Portfolio from '../component/Portfolio';
import Contact from '../component/Contact';
import Cursor from '../component/Cursor';
import BackToTop from '../component/BackToTop';


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
                {/* <Style_Switcher /> */}
                <Cursor />
                <BackToTop />

            </div>
        </div>
    )
}

export default App
