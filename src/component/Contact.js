//importing css and js
import '../assets/css/style.css'
import '../assets/css/style-switcher.css'

// style switcher
import '../assets/css/skins/color-1.css'
// import '../assets/css/skins/color-2.css'
// import '../assets/css/skins/color-3.css'
// import '../assets/css/skins/color-4.css'
// import '../assets/css/skins/color-5.css'


const Contact
    = () => {
        return (
            <section className='contact section' id="contact">
                <div className='container'>
                    <div className='row'>
                        <div className='section-title'>
                            <h2>Contact Me</h2>
                        </div>
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
                                    <div className='form-group' style={{ display: 'flex', justifyContent: 'center' }}>
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