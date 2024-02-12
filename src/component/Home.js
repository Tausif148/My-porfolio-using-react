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
import profile from '../assets/img/profile-dp.jpg';


export function Home() {
    return (
        <section className="home section ">
            <div className='container'>
                <div className='row'>
                    <div className='home-info padd-15'>
                        <h3 className='hello'>Hello, my name is <span className='name'>Tausif Sheikh</span></h3>
                        <h3 className='my-profession'>I'm a <span className='typing'>Web Developer</span></h3>
                        <p>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
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

// export default Home;

