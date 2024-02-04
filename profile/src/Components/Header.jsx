import React, { useEffect, useState } from 'react'
import './Header.css'
import { MDBSwitch } from 'mdb-react-ui-kit';
import logo from '../Assets/img1.png'
import img from '../Assets/picture.png'

function Header() {
    const [theme, setTheme] = useState('light');
    //theme variable tracks the current theme of the app, which the code sets to 'light' by default.
    
    //add a toggle button to switch
    const toggleTheme = ()=>{
      if(theme === 'light'){
        setTheme('dark')
      }
      else{
        setTheme('light')
      }
    }
  
    useEffect(() => {
        localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);
  
    //useEffect hook to update the className of the document.body element
    //based on the theme state variable. This allows to dynamically update
    //the CSS of the application based on the theme.
    
    const switchStyles = {
      backgroundColor: theme === 'dark' ? '#D017B8' : '#B1B1B1',
    };

  return (
    <div>
        {/* <div className={${theme}}  style={{ display: 'flex'}}> */}
        <div className={`${theme}`} style={{ display: 'flex'}}>

        {/* <i class="fa-regular fa-sun  pe-2 my-1"></i> */}
         <MDBSwitch style={switchStyles} onClick={toggleTheme}  id='flexSwitchCheckChecked'/>
         {/* <i class="fa-regular fa-moon my-1 ps-1"></i> */}

         <div className="hero">
        <nav className='nav1'>
          {/* src={theme == 'light' ? logo_light : logo_dark } */}
          <img  src={logo} className='logo' alt="" />
          <ul>
            
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          
          <div>
            {/* <a href="#" className='login-btn'>Profile</a> */}
            <a  href="https://www.linkedin.com/in/asha-saji-112649223/" className='btn'>Profile</a>
            
            
            {/* <img onClick={toggle_mode} src={theme == 'light' ? toggle_light : toggle_dark}  className="toggle-icon " alt="" /> */}
{/* <img src={toggle_dark} id='icon' alt="" /> */}

<div>
  
</div>



            <div>
            </div>
          </div>
        </nav>
        <div className='content'> 
<h1 className='anim text-primary'>Hello!,<br /> It's Me Asha Saji</h1>
<p className='anim text-primary' >I am a MEARN STACK Developer with the knowledge in both Frontend and Backend  & specially skilled at React,Angular and Node.js</p>
       <a href="#contact" className='btn anim' >Contact Me</a>
        </div>
<img src={img}  className='feature-img  anim'   alt="" />
        
        
       </div>
        </div>

    </div>
  )
}

export default Header