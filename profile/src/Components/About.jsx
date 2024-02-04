import React from 'react'
import './About.css'
import one from '../Assets/two.jpg'
function About() {
  return (
    <div className='m-4 p-3 container'>
        <div id='about' className='about'> 
        <div>
          <br />
          <br />
        <h3 className='text-center text-primary'>About Me</h3>
  
        
        </div>
<div className="row container m-3 p-4 ">
    <div className="col-6 ">
             
    <p className='card1 container m-3 border border-3' style={{textAlign:"justify",border:"solid blue"}}>Hello,My name is Asha Saji,I am a BTech Graduate Specializes in Computer Science and Engineering from Baselios Mathews II College,Kollam.
    Currently I am a MEARN STACK  intern at Luminar Technolab,Kochi. <br />
    <p className='container text-primary'>Connect with me on 
    <a href="https://www.linkedin.com/in/asha-saji-112649223/"><br /><i class="fa-brands fa-linkedin m-2"></i></a>
    <a href="https://github.com/ashasaji2001"><i class="fa-brands fa-square-github"></i></a>
    </p>

     </p>
<br />
            <  img src={one} className='container m-3 p-3' alt="" />
        
    </div>
    <div className="col-6 container">
      
    
       
        <section className='timeline-area'>
          <div className='abt'>
          <h4>BTECH</h4>
<h5>2019-2023</h5>
<h6 className='text-primary'>Baselios Mathews II college of Engineering,Kollam</h6>
          </div>
          
          <div className='abt'> 
          <h4>PLUS TWO</h4>
<h5>2018-2019</h5>
<h6 className='text-primary'>ST Mary's HSS ,Kizhakkekara,kollam</h6>
          </div>
          
          <div className='abt'>
          <h4>SSLC</h4>
<h5>2016-2017</h5>
<h6 className='text-primary'>ST Mary's HSS ,Kizhakkekara,kollam</h6>
          </div>
        
         
        </section>
       
    </div>
</div>
        </div>
    </div>
  )
}

export default About