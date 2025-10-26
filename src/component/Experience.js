//importing css and js
import '../assets/css/style.css'
import '../assets/css/style-switcher.css'

//  style switcher
import '../assets/css/skins/color-1.css'
// import '../assets/css/skins/color-2.css'
// import '../assets/css/skins/color-3.css'
// import '../assets/css/skins/color-4.css'
// import '../assets/css/skins/color-5.css'


const Experience = () => {
    return (
        <section className="experience about section" id="experience">
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>My Journey</h2>
                    </div>
                    <div className='row'>
                        <div className="about-content padd-15">

                            <div className='row'>
                                <div className='experience padd-15'>
                                    <h3 className='title'>Experience</h3>
                                    <div className='row'>
                                        <div className='timeline-box padd-15'>
                                            <div className='timeline shadow-dark'>

                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2022 - Present
                                                    </h3>
                                                    <h4 className='timeline-title'>Frontend & Shopify Developer — Vowel Web, Nagpur</h4>
                                                    <p className='timeline-text'>
                                                        Specialize in end-to-end custom Shopify theme development, delivering unique e-commerce solutions from concept to deployment.
                                                        Focus on performance optimization, mobile responsiveness, and cross-browser compatibility.
                                                    </p>

                                                    <p className='timeline-text' style={{ margin: '1rem 0' }}>Build performant and responsive themes using Liquid templating, modern CSS, JavaScript, and Shopify CLI. Develop custom Shopify theme components, dynamic sections, and advanced functionality using Liquid, JavaScript, and Shopify's theme architecture.</p>
                                                </div>

                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2021 - 2022
                                                    </h3>
                                                    <h4 className='timeline-title'>Web Developer Trainee — Codeosity</h4>
                                                    <p className='timeline-text'>
                                                        My training provided a comprehensive foundation in front-end development, covering HTML, CSS, JavaScript, and PHP to build dynamic, user-focused websites. I solidified this knowledge by working on real-world projects, which sharpened my problem-solving skills and ability to write efficient, production-ready code.                                               </p>

                                                    <p className='timeline-text' style={{ margin: '1rem 0' }}>Through structured training in HTML, CSS, JavaScript, and PHP, I gained a strong foundation in web development. This was enhanced by hands-on project work, which improved my practical skills and problem-solving abilities.</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

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
                                                    <h4 className='timeline-title'> Bachelor of Engineering</h4>
                                                    <p className='timeline-text'>
                                                        I completed my Bachelor's degree in Engineering with a focus on web development from Julelal Institute of Technology at Nagpur University. During these four years,
                                                        I developed a strong foundation in front-end and back-end web technologies, including HTML, CSS, JavaScript, and frameworks like React and Node.js.
                                                        I also had the opportunity to work on several hands-on projects, such as building responsive websites and full-stack web applications.
                                                    </p>
                                                </div>

                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2015-2017
                                                    </h3>
                                                    <h4 className='timeline-title'> Higher Secondary School Certificate</h4>
                                                    <p className='timeline-text'>
                                                        I completed my Higher Secondary education at Shindi Hindi Junior College, focusing on the Science stream with a specialization in Physics, Chemistry, and Mathematics. This phase of my education helped me build a strong analytical and problem-solving mindset, as well as an understanding of core scientific principles.
                                                    </p>
                                                </div>

                                                {/* ========timeline item ========*/}
                                                <div className='timeline-item'>
                                                    <div className='cicle-dot'></div>
                                                    <h3 className='timeline-date'>
                                                        <i className='fa-solid fa-calendar-days'></i>2013-2015
                                                    </h3>
                                                    <h4 className='timeline-title'> Secondary School Certificate</h4>
                                                    <p className='timeline-text'>
                                                        I completed my secondary education at DEF Pannalal Devadiya High School, where I earned my Secondary School Certificate. This was a pivotal time in my academic journey, as I developed a solid understanding of foundational subjects like Mathematics, English, and the Sciences.
                                                    </p>
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

export default Experience;                                                         
