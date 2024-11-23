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

                <div className='col-lg-12 img-text d-flex align-items-center justify-content-center my-4' data-aos="">
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
        <div>

  <div className='row d-flex justify-content-evenly mx-3'>
    {/* First Card */}
    <div className='card-cont col-lg-3 col-md-5 mb-5'>
      <div class="card cards">
        <img src={Bhaag_milka} class="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
        <div class="card-body">
          <h4 class="fg-item-title d-flex justify-content-evenly mt-4">National sports 2017</h4>
          <p className="card-description mt-3 w-100 p-3" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
            This is a detailed description of the gallery item. The image depicts an annual sports event that took place in 2017, showcasing various athletic performances and activities. The event highlighted national level sports, promoting fitness and athleticism across different age groups. 
          </p>
        </div>
      </div>
    </div>

    {/* Second Card */}
    <div className='col-lg-3 col-md-5 mb-5'>
      <div class="card cards">
        <img src={aero} class="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
        <div class="card-body">
          <h4 class="fg-item-title d-flex justify-content-evenly mt-4">National Archery 2013</h4>
          <p className="card-description mt-3 w-100 p-3" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
            This event focused on the national archery championships of 2013. Archers from across the country competed for top honors, demonstrating their precision, skill, and concentration. It was a significant event in the world of archery, showcasing the best of talent.
          </p>
        </div>
      </div>
    </div>

    {/* Third Card */}
    <div className='col-lg-3 col-md-5 mb-5'>
      <div class="card cards">
        <img src={dancing} class="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
        <div class="card-body">
          <h4 class="fg-item-title d-flex justify-content-evenly mt-4">Annual Sports 2011</h4>
          <p className="card-description mt-3 w-100 p-3" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
            This annual event in 2011 brought together the best dancers to showcase their talent in various categories. The performances were judged based on creativity, execution, and expression. It remains a significant event for dancers to compete at a national level.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className='row d-flex justify-content-evenly mx-3'>
    {/* Fourth Card */}
    <div className='col-lg-3 col-md-5 mb-5'>
      <div class="card">
        <img src={Bhaag_milka2} class="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
        <div class="card-body">
          <h4 class="fg-item-title d-flex justify-content-evenly mt-4">Annual Sports 2010</h4>
          <p className="card-description mt-3 w-100 p-3" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
            The 2010 Annual Sports event highlighted various sporting activities with participants from around the country. This event is notable for its inclusiveness and community involvement, allowing sports enthusiasts to engage in healthy competition.
          </p>
        </div>
      </div>
    </div>

    {/* Fifth Card */}
    <div className='col-lg-3 col-md-5 mb-5'>
      <div class="card">
        <img src={aero2} className="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
        <div class="card-body">
          <h4 class="fg-item-title d-flex justify-content-evenly mt-4">Archery 2009</h4>
          <p className="card-description mt-3 w-100 p-3" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
            The 2009 Archery event was one of the most competitive competitions, with athletes from different regions competing for the top spot. The event focused on precision and technique, making it a crucial tournament in the archery calendar.
          </p>
        </div>
      </div>
    </div>

    {/* Sixth Card */}
    <div className='col-lg-3  col-md-5 mb-5'>
      <div class="card">
        <img src={aero3} className="img-top-2 img-fluid" alt="3-D Mapping Shown Video" style={{ height: '310px', width: '500px' }} />
        <div class="card-body">
          <h4 class="fg-item-title d-flex justify-content-evenly mt-4">Sports World Championship 2005</h4>
          <p className="card-description mt-3 w-100 p-3" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
            The 2005 Sports World Championship was a milestone in the world of athletics, with top athletes from various countries competing in a wide range of events. It was celebrated for its international participation and remarkable performances across different sports.
          </p>
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
