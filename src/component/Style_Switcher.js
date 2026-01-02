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


