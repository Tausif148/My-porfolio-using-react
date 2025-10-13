//importing css and js
import '../assets/css/style.css'
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
        <section className="about section" id="about">
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>About Me</h2>
                    </div>
                    <div className='row'>
                        <div className="about-content padd-15">
                            <div className='row '>
                                <div className='about-text padd-15'>
                                    <h3>I'm Tausif Sheikh As <span>Web Developer</span></h3>
                                    <p>I'm a web developer with in-depth experience in UI design. In a nutshell, I create websites that help organizations address business challenges.</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='personal-info padd-15'>
                                    <div className='row'>
                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>Birthday:</span>
                                                <span>19 Nov 1999</span>
                                            </p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>Age:</span>
                                                <span>24</span>
                                            </p>
                                        </div>

                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>Email:</span>
                                                <span>sheikhtousif148@gmail.com</span>
                                            </p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>Degree:</span>
                                                <span>BE</span>
                                            </p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>Phone:</span>
                                                <span>+91 8793194591</span>
                                            </p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>City:</span>
                                                <span>Nagpur</span>
                                            </p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>Freelance:</span>
                                                <span>Available</span>
                                            </p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>Github:</span>
                                                <a href='https://github.com/Tausif148/' target='_blank' rel='noopener noreferrer'>
                                                    https://github.com/Tausif148/
                                                </a>
                                            </p>
                                        </div>
                                        <div className='info-item padd-15'>
                                            <p>
                                                <span>LinkedIn:</span>
                                                <a href='https://www.linkedin.com/in/tausifsheikh19/' target='_blank' rel='noopener noreferrer'>
                                                    www.linkedin.com/in/tausifsheikh19/
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='buttons'>
                                            <a href='https://drive.google.com/file/d/1lmjMHnpC4ehk354VLg_YIc4w5Y_hg7Am/view?usp=drive_link' rel='noopener noreferrer' target='_blank' className='btn'>Download CV</a>
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
                                            <h5>SHOPIFY</h5>
                                            <div className='progress'>
                                                <div className='progress-in' style={{ width: '86%' }}></div>
                                                <div className='skill-percent'>86%</div>
                                            </div>
                                        </div>
                                        <div className='skill-item padd-15'>
                                            <h5>REACT</h5>
                                            <div className='progress'>
                                                <div className='progress-in' style={{ width: '45%' }}></div>
                                                <div className='skill-percent'>45%</div>
                                            </div>
                                        </div>
                                                      <div className='skill-item padd-15'>
                                            <h5>PHP</h5>
                                            <div className='progress'>
                                                <div className='progress-in' style={{ width: '40%' }}></div>
                                                <div className='skill-percent'>40%</div>
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
