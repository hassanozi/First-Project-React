import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <>
      <div className='container  vh-100'>

            <div className='Cordinate'>
                
                <h6 className='pt-5 ms-5 fontSmall' style={{ letterSpacing: '0.50em' }}>MY SPECIALTY</h6>
                <h4 className='pt-4 ms-5 fontfam' style={{ letterSpacing: '0.20em' }}>MY SKILLS</h4>
                <p className='pt-4 ms-5 fontfam'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
       
            </div>

           <div className="row justify-content-center mt-5">
                <div className="col-md-3 me-5">
                    <label>Photoshop</label>
                    <div className="progress">
                    <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                    </div>
                </div>
                <div className="col-md-3 ms-5">
                    <label>jQuery</label>
                    <div className="progress">
                    <div className="progress-bar bg-info" style={{ width: '75%' }}></div>
                    </div>
                </div>
            </div>


            <div className="row mt-5 justify-content-center">
                <div className="col-md-3 me-5">
                    <label>HTML5</label>
                    <div className="progress">
                    <div className="progress-bar bg-success" style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div className="col-md-3 ms-5">
                    <label>CSS3</label>
                    <div className="progress">
                    <div className="progress-bar bg-info" style={{ width: '55%' }}></div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 justify-content-center">
                <div className="col-md-3 me-5">
                    <label>WordPress</label>
                    <div className="progress">
                    <div className="progress-bar bg-success" style={{ width: '50%' }}></div>
                    </div>
                </div>
                <div className="col-md-3 ms-5">
                    <label>SEO</label>
                    <div className="progress">
                    <div className="progress-bar bg-info" style={{ width: '25%' }}></div>
                    </div>
                </div>
            </div>

            

           
        </div>  
    </>
  )
}
