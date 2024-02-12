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


// importing images for home component
import project6 from '../assets/img/project-6.jpg';



const Portfolio
    = () => {
        return (
            <section className='portfolio section '>
                <div className='container'>
                    <div className='row'>
                        <div className='section-title padd-15'>
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='portfolio-heading padd-15'>
                            <h2>My Last Project: </h2>
                        </div>
                    </div>
                    <div className='row'>
                        {/* ========portfolio item start ========*/}
                        <a href='#' target='_blank' className='portfolio-item padd-15'>
                            <div className='portfolio-item-inner shadow-dark'>
                                <div className='portfolio-img'>
                                    <img src={project6} alt='project6' />
                                </div>
                            </div>
                        </a>
                        {/* ========portfolio item end ========*/}


                        {/* ========portfolio item start ========*/}
                        <a href='#' target='_blank' className='portfolio-item padd-15'>
                            <div className='portfolio-item-inner shadow-dark'>
                                <div className='portfolio-img'>
                                    <img src={project6} alt='project2' />
                                </div>
                            </div>
                        </a>
                        {/* ========portfolio item end ========*/}


                        {/* ========portfolio item start ========*/}
                        <a href='#' target='_blank' className='portfolio-item padd-15'>
                            <div className='portfolio-item-inner shadow-dark'>
                                <div className='portfolio-img'>
                                    <img src={project6} alt='project3' />
                                </div>
                            </div>
                        </a>
                        {/* ========portfolio item end ========*/}


                        {/* ========portfolio item start ========*/}
                        <a href='#' target='_blank' className='portfolio-item padd-15'>
                            <div className='portfolio-item-inner shadow-dark'>
                                <div className='portfolio-img'>
                                    <img src={project6} alt='project4' />
                                </div>
                            </div>
                        </a>
                        {/* ========portfolio item end ========*/}


                        {/* ========portfolio item start ========*/}
                        <a href='#' target='_blank' className='portfolio-item padd-15'>
                            <div className='portfolio-item-inner shadow-dark'>
                                <div className='portfolio-img'>
                                    <img src={project6} alt='project5' />
                                </div>
                            </div>
                        </a>
                        {/* ========portfolio item end ========*/}


                        {/* ========portfolio item start ========*/}
                        <a href='#' target='_blank' className='portfolio-item padd-15'>
                            <div className='portfolio-item-inner shadow-dark'>
                                <div className='portfolio-img'>
                                    <img src={project6} alt='project6' />
                                </div>
                            </div>
                        </a>
                        {/* ========portfolio item end ========*/}
                    </div>
                </div>
            </section>


        )
    }


export default Portfolio;    