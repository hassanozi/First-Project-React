import React, { useState } from 'react'
import work1 from '../../assets/images/work1.jpg'
import work2 from '../../assets/images//work2.jpg'
import work3 from '../../assets/images//work3.jpg'
import work4 from '../../assets/images//work4.jpg'
import work5 from '../../assets/images//work5.jpg'
import work6 from '../../assets/images//work6.jpg'
import work7 from '../../assets/images//work7.jpg'


export default function Work() {

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore); 
    };

  return (
    <>
      <div className='container vh-150 p-0 '>

            <div className='Cordinate'>
                <h6 className='m-0 fontSmall' style={{ letterSpacing: '0.50em' }}>MY WORK</h6>
                <h4 className='pt-4 fontfam' style={{ letterSpacing: '0.20em' }}>RECENT WORK</h4>

                <div className='d-flex mt-4'>
                    <a href="" className='pe-4 text-decoration-none'>Graphic Design</a>
                    <a href="" className='pe-4 text-decoration-none'>Apps</a>
                    <a href="" className='text-decoration-none'>Software</a>
                </div>
                
            </div>

            <div className='Cordinate2 mt-3 d-flex flex-wrap'>
                <div className="hover-image image1 me-3 mb-3"></div>
                <div className="hover-image image2 me-3 mb-3"></div>
                <div className="hover-image image3 me-3 mb-3"></div>
                <div className="hover-image image4 me-3 mb-3"></div>
                {showMore && (
                <>
                <div className="hover-image image6 me-3 mb-3"></div>
                <div className="hover-image image7 me-3 mb-3"></div>
                </>
                )}
            </div>

                
            <button onClick={handleShowMore} className='btn btn-primary' style={{marginTop:'20px',marginLeft:'100px'}}>{showMore ? "Show Less" : "Show More"}</button>
      
            

           
        </div>  
    </>
  )
}
