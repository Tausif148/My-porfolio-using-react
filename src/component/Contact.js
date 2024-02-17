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



const Contact
    = () => {
        return (
            <section className='contact section' id="contact">
                <div className='container'>
                    <div className='row'>
                        <div className='section-title padd-15'>
                            <h2>Contact Me</h2>
                        </div>
                    </div>

                    <h3 className='contact-title padd-15'>Have You Any Questions ?</h3>
                    <h4 className='contact-sub-title padd-15'>I'M AT YOUR SERVICES</h4>

                    <div className='row'>
                        <div className='contact-info-item padd-15'>
                            <div className='icon'>
                                <i className='fa fa-phone'></i>
                                <h4 >Call Us On</h4>
                                <p>+91 8793194591</p>
                            </div>
                        </div>
                        {/* ========contact info item ========*/}

                        {/* ========contact info item ========*/}
                        <div className='contact-info-item padd-15' >
                            <div className='icon'>
                                <i className='fa fa-map-marker-alt'></i>
                                <h4 >City</h4>
                                <p>Nagpur</p>
                            </div>
                        </div>
                        {/* ========contact info item ========*/}

                        {/* ========contact info item ========*/}
                        <div className='contact-info-item padd-15'>
                            <div className='icon'>
                                <i className='fa fa-envelope'></i>
                                <h4 >Email</h4>
                                <p>sheikhtousif148@gmail.com</p>
                            </div>
                        </div>
                        {/* ========contact info item ========*/}

                        {/* ========contact info item ========*/}
                        <div className='contact-info-item padd-15'>
                            <div className='icon'>
                                <i className='fa fa-globe-europe'></i>
                                <h4 >Website</h4>
                                <p>wwww.sktausif.com</p>
                            </div>
                        </div>
                        {/* ========contact info item ========*/}
                    </div>

                    <h3 className='contact-title padd-15'>SEND ME AN EMAIL</h3>
                    <h4 className='contact-sub-title padd-15'>I'M VERY RESPONSIVEN TO MESSAGES </h4>
                    {/* ========Contact Form========*/}
                    <div className='row'>
                        <div className='contact-form padd-15'>
                            <div className='row'>
                                <div className='form-item col-6 padd-15'>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' placeholder='Name' />
                                    </div>
                                </div>

                                <div className='form-item col-6 padd-15'>
                                    <div className='form-group'>
                                        <input type='email' className='form-control' placeholder='Email' />
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='form-item col-12 padd-15'>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' placeholder='Subject' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='form-item col-12 padd-15'>
                                    <div className='form-group'>
                                        <textarea name='' className='form-control' id='' placeholder='Message'></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='form-item col-12 padd-15'>
                                    <div className='form-group'>
                                        <button type='submit' className='btn'> Send Message</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        )
    }


export default Contact;    