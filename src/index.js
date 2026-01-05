import React from 'react';
import ReactDOM from 'react-dom/client';

//importing css and js
import './assets/css/style.css'
import './assets/css/style-switcher.css'

//  style switcher
import './assets/css/skins/color-1.css'
// import './assets/css/skins/color-2.css'
// import './assets/css/skins/color-3.css'
// import './assets/css/skins/color-4.css'
// import './assets/css/skins/color-5.css'

//importing component
import Sidebar from './component/Sidebar'
import { Home } from './component/Home';
import About from './component/About'
import Experience from './component/Experience';
// import Service from './component/Service';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Cursor from './component/Cursor';
import BackToTop from './component/BackToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main-container'>
      <Sidebar />

      <div className='main-content'>
        <Home />
        <About />
        <Experience />
        {/* <Service /> */}
        <Portfolio />
        <Contact />
        {/* <Style_Switcher /> */}
        <Cursor />
        <BackToTop />
      </div>

    </div>
  </React.StrictMode>
);


