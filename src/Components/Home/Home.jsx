import React from 'react';
import react1 from '../../assets/images/react-1.jpg';
import react2 from '../../assets/images/react-2.jpg';
import './Home.css'

export default function Home() {
  return (
    <>
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel" data-bs-interval="2000"
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active background1">
          
          <div className=" ms-5 mt-5 h-100">
            <h1 className="text-dark fw-bold text-shadow home1 home2 bold">
              Hi!
            </h1>
            <h2 className='home2 bold'>
              Im Hassan
            </h2>
            <p className='home2'>100% html5 bootstrap templates Made</p>
            <p className='home2'>By <a href="">Colorlib.com</a></p>
            <label className='p-2 border-1 border-black border home2'>Download CV <i className="fa-solid fa-download"></i></label>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="carousel-item background2">
          <div className="ps-5 mt-5 h-100">
            <h1 className="text-dark fw-bold text-shadow home1 home2 bold">
              I am
            </h1>
            <h2 className='home2 bold'>
              a Designer
            </h2>
            <p className='home2'>100% html5 bootstrap templates Made</p>
            <p className='home2'>By <a href="">Colorlib.com</a></p>
            <label className='p-2 border-1 border-black border home2'>View Portofolio <i className="fa-solid fa-briefcase"></i></label>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
