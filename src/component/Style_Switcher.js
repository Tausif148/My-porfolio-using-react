//importing css and js
import '../assets/css/style.css'
import '../assets/css/style-switcher.css'

//  style switcher
import '../assets/css/skins/color-1.css'
// import '../assets/css/skins/color-2.css'
// import '../assets/css/skins/color-3.css'
// import '../assets/css/skins/color-4.css'
// import '../assets/css/skins/color-5.css'


const Style_Switcher = () => {
    return (
        <div>
            <div className="style-switcher">
                <div className="style-switcher-toggler s-icon">
                    <i className='fas fa-cog fa-spin'> </i>
                </div>
                <div className="day-night s-icon">
                    <i className='fas fa-moon '> </i>
                </div>

                <h4>Theme Color</h4>
                <div className='colors'>
                    <span className='color-1 ' > </span>
                    <span className='color-2 ' > </span>
                    <span className='color-3 ' > </span>
                    <span className='color-4 ' > </span>
                    <span className='color-5 ' > </span>
                </div>
            </div>
        </div>
    )
}


export default Style_Switcher;


