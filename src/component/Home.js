//importing css and js
import '../assets/css/style.css'
import '../assets/css/style-switcher.css'

//  style switcher
import '../assets/css/skins/color-1.css'
// import '../assets/css/skins/color-2.css'
// import '../assets/css/skins/color-3.css'
// import '../assets/css/skins/color-4.css'
// import '../assets/css/skins/color-5.css'

// importing images for home component
import profile from '../assets/img/linkedin profile.jpg';

export function Home() {
    return (
        <section className="home section " id="home">
            <div className='container'>
                <div className='row'>
                    <div className='home-info padd-15'>
                        <h3 className='hello'>Hello, my name is <span className='name'>Tausif Sheikh</span></h3>
                        <h3 className='my-profession'>I'm a <span className='typing'>Web Developer</span></h3>
                        <p>A passionate Frontend & Shopify Developer. Bringing digital ideas to life with slick, responsive web applications and custom Shopify solutions is what I thrive on.</p>
                        <p>My journey has been filled with coding across HTML, CSS, JavaScript, and Liquid to create websites that not only look good but function seamlessly. I've helped businesses reach their online potential by customizing Shopify themes, integrating essential APIs, and enhancing user experiences. Problem-solving is part of my daily routine, whether it's fixing bugs or ensuring our sites play nice with all browsers.	</p>
                        <a href='#contact' className='btn hire-me'> Hire Me</a>
                    </div>
                    <div className='home-img'>
                        <img src={profile} alt='profile-dp' />
                    </div>
                </div>
            </div>
        </section>
    )
}



