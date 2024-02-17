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


const About = () => {
    return (
        <section className="section about ">
            <div className='container'>
                <div className='row'>
                    <div className='section-title padd-15'>
                        <h2>About Me</h2>
                    </div>
                    <div className='row'>
                        <div className="about-content padd-15">
                            <div className='row'>
                                <div className='about-text padd-15'>
                                    <h3>I'm Tausif Sheikh and <span>Web Developer</span></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='personal-info padd-15'>
                                    <div className='row'>
                                        <div className='info-item padd-15'>
                                            <p>Birthday:<span>19 Nov 1999</span></p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>Age:<span>24</span></p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>Website:<span>www.sktausif.com</span></p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>Email:<span>sheikhtousif148@gmail.com</span></p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>Degree:<span>BE</span></p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>Phone:<span>+91 8793194591</span></p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>City:<span>Nagpur</span></p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>Freelance:<span>Available</span></p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='buttons padd-15'>
                                            <a href='#' className='btn'>Download</a>
                                            <a href='#contact' className='btn hire-me'>Hire Me</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='skills padd-15'>
                                    <div className='row'>
                                        <div className='skill-item padd-15'>
                                            <h5>HTML</h5>
                                            <div className='progress'>
                                                <div className='progress-in' style={{ width: '90%' }}></div>
                                                <div className='skill-percent'>90%</div>
                                            </div>
                                        </div>
                                        <div className='skill-item padd-15'>
                                            <h5>CSS</h5>
                                            <div className='progress'>
                                                <div className='progress-in' style={{ width: '85%' }}></div>
                                                <div className='skill-percent'>85%</div>
                                            </div>
                                        </div>
                                        <div className='skill-item padd-15'>
                                            <h5>JS</h5>
                                            <div className='progress'>
                                                <div className='progress-in' style={{ width: '66%' }}></div>
                                                <div className='skill-percent'>66%</div>
                                            </div>
                                        </div>
                                        <div className='skill-item padd-15'>
                                            <h5>REACT</h5>
                                            <div className='progress'>
                                                <div className='progress-in' style={{ width: '45%' }}></div>
                                                <div className='skill-percent'>45%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='education padd-15'>
                                    <h3 className='title'>Education</h3>
                                    <div className='row'>
                                        <div className='timeline-box padd-15'>
                                            <div className='timeline shadow-dark'>
                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2017-2021
                                                    </h3>
                                                    <h4 className='timeline-title'> Batchler of engineering</h4>
                                                    <p className='timeline-text '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                </div>

                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2017-2021
                                                    </h3>
                                                    <h4 className='timeline-title'> Batchler of engineering</h4>
                                                    <p className='timeline-text '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                </div>


                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2017-2021
                                                    </h3>
                                                    <h4 className='timeline-title'> Batchler of engineering</h4>
                                                    <p className='timeline-text '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='experience padd-15'>
                                    <h3 className='title'>Experience</h3>
                                    <div className='row'>
                                        <div className='timeline-box padd-15'>
                                            <div className='timeline shadow-dark'>
                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2017-2021
                                                    </h3>
                                                    <h4 className='timeline-title'> Batchler of engineering</h4>
                                                    <p className='timeline-text '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                </div>

                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2017-2021
                                                    </h3>
                                                    <h4 className='timeline-title'> Batchler of engineering</h4>
                                                    <p className='timeline-text '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                </div>


                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2017-2021
                                                    </h3>
                                                    <h4 className='timeline-title'> Batchler of engineering</h4>
                                                    <p className='timeline-text '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;                                                         
