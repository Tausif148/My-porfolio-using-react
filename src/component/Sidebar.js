//importing css and js
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/css/style-switcher.css'

//  style switcher
import '../assets/css/skins/color-1.css'
// import '../assets/css/skins/color-2.css'
// import '../assets/css/skins/color-3.css'
// import '../assets/css/skins/color-4.css'
// import '../assets/css/skins/color-5.css'



// js
import '../assets/js/script'

const Sidebar = () => {
    // Function to handle the toggle click
    const handleToggleClick = () => {
        const aside = document.querySelector('.aside');
        aside.classList.toggle('open');
    };

    return (
        <div>
            <div className="aside">
                <div className='logo'>
                    <a href='#'><span>T</span>ausif</a>
                </div>

                <div className='nav-toggler' onClick={handleToggleClick}>
                    <span></span>
                </div>

                <ul className='nav'>
                    <li><a href="#" className="active"><i className='fa fa-home'></i>Home</a></li>
                    <li><a href="#"><i className='fa fa-user'></i>About</a></li>
                    <li><a href="#"><i className='fa fa-list'></i>Services</a></li>
                    <li><a href="#"><i className='fa fa-briefcase'></i>Portfolio</a></li>
                    <li><a href="#"><i className='fa fa-comments'></i>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;


