import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import run from '../../images/running.jpg';
import fighter from '../../images/Joy-Sport-day-29-8-2022-61.jpg';
import Bhaag_milka from '../../images/bhaag_milka.jpg';
import aero from '../../images/aero.png';
import dancing from '../../images/pink_girl.jpg';
import Bhaag_milka2 from '../../images/bhaag_milka2.jpg';
import aero2 from '../../images/aero2.jpg';
import aero3 from '../../images/Aero3.jpg';
import chainlink from '../../images/img_chain_link-removebg.png'
import new1 from '../../images/karate.webp'
import new4 from '../../images/sportsrunning.png'


const SportScl = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [six, setSix] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS 
    return () => {
      AOS.refresh(); // Clean up on component unmount
    };
  }, []);
  return (
    <>
      <Container>

        <div className='container-fluid bg-light'>

          <div className='row '>
            <div className='col-lg-12  col-sm-12'>
              <h2 className='text-center mt-5 mb-5' data-aos="fade-right">The Essence of Sports: Stories in Every Moment</h2>
            </div>

            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-6 col-sm-12 ms-lg-5 mb-4 mt-lg-5 Empower'>
                  <h3 class="elementor-heading-title elementor-size-default me-lg-5 ms-md-3 text-center mx-1" data-aos="fade-right">Advancing Growth through Sports: The Doaguru School Edge</h3>
                </div>

                <div className='col-lg-5 col-md-12 img-top mt-4 mt-lg-5'>
                  <div class="card cardi img-top-1 mt-lg-3 mx-3" data-aos="fade-down">
                    <img src={new4} class="mx-auto img-fluid image img-top-1" alt="3-D Mapping Shown Video" height={310} />
                  </div>
                </div>

                <div className='col-lg-12 img-text d-flex align-items-center justify-content-center mt-4'>
                  <p className='ms-md-3 col-lg-12 ' data-aos="">At Doaguru School, we consider physical activity a key component of student growth and well-being.
                    Engaging in sports promotes not only physical health but also develops important traits such as confidence, leadership, sportsmanship,
                    and teamwork. We encourage our students to participate in a variety of sports, helping them enjoy an active lifestyle and embrace a healthy,
                    balanced approach to life.</p>
                </div>

              </div>
            </div>
          </div>

          <div className='row mt-5 second'>
            <div className='col-lg-12 mt-lg-5'>
              <div className='row'>

                <div className='col-lg-6 col-sm-12 d-flex align-items-cente ms-lg-5 mb-4 mt-lg-5 Empower'>
                  <h3 class="elementor-heading-title elementor-size-default ms-md-3 me-lg-5 text-center mx-1" data-aos="fade-right">Exploring Interests Through Our Varied Physical Education</h3>
                </div>

                <div className='col-lg-5 col-md-12 img-top mt-4 mt-lg-5'>
                  <div class="card cardi img-top-2 mt-lg-3 mx-3" data-aos="fade-up">
                    <img src={new1} class="mx-auto img-fluid image img-top-2" alt="3-D Mapping Shown Video" height={310} />
                  </div>
                </div>

                <div className='col-lg-12 img-text d-flex align-items-center justify-content-center mt-4' data-aos="">
                  <p className=''>
                    At Doaguru School, we take pride in offering a comprehensive and diverse Physical Education (PE) curriculum that extends beyond mere exercises.
                    Our aim is to provide students with a variety of engaging activities, helping them discover a physical pursuit they truly enjoy and wish to continue beyond school.
                    <br />
                    In our PE classes, students explore a wide variety of sports and activities, each catering to different interests and skill levels. From the excitement of athletics and the strategy of chess to the teamwork in basketball, the challenge of climbing, the passion of football, the finesse of hockey, the artistry of dance, and the strength of yoga, our curriculum offers something for every student to enjoy and excel in.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid mt-5' data-aos="zoom-in">

          <div className='row d-flex align-items-center justify-content-center mb-5 mx-3'>
            <div className=' col-lg-6 col-md-6 Forest border d-flex align-items-center justify-content-center'>

              <div className='z-50 d-flex align-items-center border-end '>
                <div class="dropdown ">
                  <button class="btn dropdown-toggle ms-5 py-lg-2 px-lg-3 pr-2 pl-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All
                  </button>
                  <ul class="dropdown-menu dropdownbox ">
                    <li><a class="dropdown-item px-2" href="#Aero"><span>2018</span></a></li>
                    <li><a class="dropdown-item px-2" href="#Mapping"><span>2016</span></a></li>
                    <li><a class="dropdown-item px-2" href="#2013"><span>2013</span></a></li>
                    <li><a class="dropdown-item px-2" href="#Ranbheri"><span>1998</span></a></li>
                  </ul>
                </div>
              </div>

             

              <div className='d-flex align-items-center ms-5 place col-lg-6 col-md-6'>
                <form class="d-flex " role="search">
                  <input class="form-control border-0 me-2 me-lg-0 py-lg-2 px-lg-5 py-md-2 px-md-1 " type="search" placeholder="Search Gallery Item..." aria-label="Search" />
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className='row d-flex justify-content-evenly mx-3'>

          <div className='card-cont col-lg-3 col-md-5 mb-5' onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div class="card cards">
              <img src={Bhaag_milka} class="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
              {isHovered && <a href='https://photos.google.com/share/AF1QipNE_GFBzXVYWYXzWq-xw_MHcB9y_ddlyBkGzkjIuNqeo1zKxpYeMlWMgMnacZOq7Q/photo/AF1QipNBvhEIN-Dz3h1wcnbJ9xvj3lKSRfrgvmR5ttRJ?key=TTR0LVUzOEFxcmJ1Q0hmMkdiRTFKYkdCeXg2eFpn' style={{ position: 'absolute', bottom: '69%', left: '43%', transform: 'translate(-50%, 50%)' }}>
                <img src={chainlink} className="z-n1 connection" alt="link" height={50} />
              </a>}

              <div class="card-body">
                <h4 class="fg-item-title d-flex justify-content-evenly mt-4">National sports 2017</h4>
                <div className='d-flex justify-content-center mb-5 mt-4'>
                  <button type="button" className="btn btn-primary button">Description</button>
                </div>
              </div>
            </div>
          </div>

          <div className=' col-lg-3 col-md-5 mb-5' onMouseEnter={() => setSecond(true)}
            onMouseLeave={() => setSecond(false)}>
            <div class="card cards">
              <img src={aero} class="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
              {second && <a href='https://photos.google.com/share/AF1QipOSHCWvZzr6u51C1Cva7XvMpTIqnffhD5iiz7FZ3WW8-nN0CcVuyGAs1dNCJIMcRw/photo/AF1QipPMBTpC46KKKe2ghCX9N-NJ5lSYmm02_stkYugL?key=cHdfbFdwSW5WaUhiYm5PQ1lhbmR0NnA5SkY5UUFB' style={{ position: 'absolute', bottom: '69%', left: '41%', transform: 'translate(-50%, 50%)' }} >
                <img src={chainlink} class="connection" alt="link" height={50} />
              </a>}

              <div class="card-body">
                <h4 class="fg-item-title d-flex justify-content-evenly mt-4">National Archery 2013</h4>
                <div className='d-flex justify-content-center mb-5 mt-4'>
                  <button type="button" class="btn btn-primary button">Description</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-5 mb-5' onMouseEnter={() => setThird(true)}
            onMouseLeave={() => setThird(false)}>
            <div class="card cards">
              <img src={dancing} class="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
              {third && <a href='https://photos.google.com/share/AF1QipOSHCWvZzr6u51C1Cva7XvMpTIqnffhD5iiz7FZ3WW8-nN0CcVuyGAs1dNCJIMcRw/photo/AF1QipPMBTpC46KKKe2ghCX9N-NJ5lSYmm02_stkYugL?key=cHdfbFdwSW5WaUhiYm5PQ1lhbmR0NnA5SkY5UUFB' style={{ position: 'absolute', bottom: '69%', left: '49%', transform: 'translate(-50%, 50%)' }}>
                <img src={chainlink} class="connection" alt="link" height={50} />
              </a>}

              <div class="card-body">
                <h4 class="fg-item-title d-flex justify-content-evenly mt-4">Annual Sports 2011</h4>
                <div className='d-flex justify-content-center mb-5 mt-4'>
                  <button type="button" class="btn btn-primary button">Description</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='row d-flex justify-content-evenly mx-3'>

          <div className='col-lg-3 col-md-5 mb-5' onMouseEnter={() => setFourth(true)}
            onMouseLeave={() => setFourth(false)}>
            <div class="card">
              <img src={Bhaag_milka2} class="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
              {fourth && <a href='https://photos.google.com/share/AF1QipMSq0l3Oh7nZVt5jxZu2SpTRFAlEk1Ra1FTmJh43MuS3fho2mXJpqe5exX55kg0cA/photo/AF1QipOfKwzb7xhOwsiY7Lo6hazJTy_YCcVlbl09Dmhu?key=amNkTjh2TWlrVUtXSDJVOHVSNllYT1d5UmhESE9R' style={{ position: 'absolute', bottom: '69%', left: '43%', transform: 'translate(-50%, 50%)' }} >
                <img src={chainlink} class="connection " alt="link" height={50} />
              </a>}

              <div class="card-body">
                <h4 class="fg-item-title d-flex justify-content-evenly mt-4">Annual Sports 2010</h4>
                <div className='d-flex justify-content-center mb-5 mt-4'>
                  <button type="button" class="btn btn-primary button">Description</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-5 mb-5' onMouseEnter={() => setFifth(true)}
            onMouseLeave={() => setFifth(false)}>
            <div class="card">
              <img src={aero2} className="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
              {fifth && <a href='https://photos.google.com/share/AF1QipMf74HNHMWsnX6x30DxkO8m61cvab9lzKjZmfHNHDTo69SiNS9BsqvRaJLxAmzZtw/photo/AF1QipOrx4Fx-MvzTdOns-0StzL9WykRe5p1uhpyhDNf?key=N2hNejJvNWt4Smd6Q3ppaUQyZ2g3NTVCVXhXdTVB' style={{ position: 'absolute', bottom: '69%', left: '41%', transform: 'translate(-50%, 50%)' }}>
                <img src={chainlink} className="connection" alt="link" height={50} />
              </a>}

              <div class="card-body">
                <h4 class="fg-item-title d-flex justify-content-evenly mt-4">Archery 2009</h4>
                <div className='d-flex justify-content-center mb-5 mt-4'>
                  <button type="button" className="btn btn-primary button">Description</button>
                </div>
              </div>
            </div>

          </div>

          <div className='col-lg-3  col-md-5 mb-5' onMouseEnter={() => setSix(true)}
            onMouseLeave={() => setSix(false)}>
            <div class="card">
              <img src={aero3} className="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
              {six && <a href='https://photos.google.com/share/AF1QipP41E2-kF_-vbAOnMoOHB6U-WZq6-ZuneMGQkwE6mZt8r3Kw3eaquVNDpDzsblfVA/photo/AF1QipPyPTIHuyVwrod_G2krTaoMpHQv7_ZtCyUdJXnr?key=a2ZpX3ZIQ3MzZ1U5eDNFZ21RNURYMVJXNEllOG13' style={{ position: 'absolute', bottom: '69%', left: '41%', transform: 'translate(-50%, 50%)' }}>
                <img src={chainlink} className="connection" alt="link" height={50} />
              </a>}

              <div class="card-body">
                <h4 class="fg-item-title d-flex justify-content-evenly mt-4">Archery 2008</h4>
                <div className='d-flex justify-content-center mb-5 mt-4'>
                  <button type="button" className="btn btn-primary button">Description</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </>
  )
};
export default SportScl;
const Container = styled.div`
*{
  margin:0;
  padding:0;
  border:border-box;
} 

/* .dropdownbox {
  width: 150px;
  /* height: 150px; */
 */
/* 
.dropdown ul li a:hover {
   background-color: #7d38c6;
} */



.dropdown ul li {
  /* background-color: #7d38c6; */
}


h2{
  font-size: 28px;
  font-family: 'ABeeZee', sans-serif;
  color:#7d38c6;
} 

 h3{
  font-size:20px; 
  color:#7d38c6;
}

 p{
  font-size:14px;
  margin: 0px 17px;
  letter-spacing: 0.2px;
  font-family: 'Poppins', sans-serif;
  Color:#808080;
}
 .Forest{
  border-radius:10px;
}
 .place{
  height:50px;
}
.img-top-1{
  border-radius:25px 0px 25px 0px; 
} 
.img-top-2{
  border-radius: 0px 25px 0px 25px; 
} 
.button{
  height:45px;
  width:100px
}
.card{
  border-radius: 0px 25px;
  /* border: none; */
  transition: transform 0.5s ease-in-out;
  &:hover{
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
  margin: auto;
}
}

.cardi {
  border: none;
}


.connection{
  border-radius:50px;
  background-color: yellow; 
  margin-left: 30px;
}



@media (min-width: 430px){

}

@media (min-width: 576px){

 }

@media (min-width: 768px){

  h2 {
    font-size:38px;
  }

  h3 {
    font-size:28px;
  }

  .image {
  width: 520px;
  
}

/* .cardi {
  width: 520px;
  text-align: center;
} */

}

@media (min-width: 992px){

  h2 {
    font-size:38px;
  }

  h3 {
    font-size:28px;
  }

  .image {
  width: 520px;
  
}

p {
  width: 1200px;
}

 }

@media (min-width: 1200px){

  h2 {
    font-size:38px;
  }
  h3 {
    font-size:28px;
  }

  .elementor-heading-title {
    margin-top: 100px;

  }

  /* p {
  width: 500px;
} */

  .second {
/* width: 294px; */
}

 }

 @media (min-width: 1400px){



}

`;
