import React from 'react'
import './About.css'
import idea from '../../assets/images/idea.png'
import glob from '../../assets/images/globe.png'
import db from '../../assets/images/database.png'
import mob from '../../assets/images/technology.png'

export default function About() {
  return (
    <>
        <div className='container vh-100'>

            <div className='Cordinate'>
                <h6 className='pt-5 ps-5 fontSmall' style={{ letterSpacing: '0.50em' }}>ABOUT US</h6>
                <h4 className='pt-4 ps-5 fontfam' style={{ letterSpacing: '0.20em' }}>WHO AM I?</h4>
                <p className='pt-4 ps-5 fontfam'><span className='fw-bold'>Hi Im Hassan Abdelrazek </span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
                <p className='pt-4 ps-5 fontfam'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            </div>
            
            <div className='d-flex Cordinate2'>

                <div className='mt-4 ms-5 h-50 w-25 p-5 bg-light-subtle shadow position-relative border-bottom border-2 border-info'>
                    <img src={idea} alt="icon" className="icon-top-left w-50 pb-2 pe-5" />
                    <h2 className='fs-6 fontfam mt-2'>Graphic Design</h2>
                </div>

                <div className='mt-4 ms-5 h-50 w-25 p-5 bg-light-subtle shadow position-relative border-bottom border-2 border-danger'>
                    <img src={glob} alt="icon" className="icon-top-left w-50 pb-2 pe-5" />
                    <h2 className='fs-6 fontfam mt-2'>Web Design</h2>
                </div>

                <div className='mt-4 ms-5 h-25 w-25 p-5 bg-light-subtle shadow position-relative border-bottom border-2 border-success'>
                    <img src={db} alt="icon" className="icon-top-left w-50 pb-2 pe-5" />
                    <h2 className='fs-6 fontfam mt-2'>Software</h2>
                </div>

                <div className='mt-4 ms-5 h-25 w-25 p-5 bg-light-subtle shadow position-relative border-bottom border-2 border-warning'>
                    <img src={mob} alt="icon" className="icon-top-left w-50 pb-2 pe-5" />
                    <h2 className='fs-6 fontfam mt-2'>Application</h2>
                </div>

                </div>

           
        </div>
        
    </>
    
  )
}
