//importing css and js
import '../assets/css/style.css'
import '../assets/css/style-switcher.css'

//importing component
import Sidebar from '../layouts/Sidebar'
import Home from '../component/Home'
import ProjectsList from '../component/ProjectsList'
import Contact from '../component/Contact';
import Cursor from '../component/Cursor';
import BackToTop from '../component/BackToTop';


function Projects() {
    const sections = [
        { id: 'home', icon: 'fa-home', label: 'Home' },
        // { id: 'stepone', icon: 'fa-briefcase', label: 'Stepone' },
        { id: 'vowelweb', icon: 'fa-briefcase', label: 'Vowelweb' },
        { id: 'codeosity', icon: 'fa-briefcase', label: 'Codeosity' },
        { id: 'personal', icon: 'fa-briefcase', label: 'Personal' },
        { id: 'contact', icon: 'fa-comments', label: 'Contact' },
    ];

    return (
        <div>
            <div className='main-container'>
                <Sidebar sections={sections} />
            </div>
            <div className='main-content'>
                <Home />
                <ProjectsList />
                <Contact />
                <Cursor />
                <BackToTop />

            </div>
        </div>
    )
}

export default Projects
