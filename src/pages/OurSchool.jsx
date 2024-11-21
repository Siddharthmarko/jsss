import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../images/WhatsApp-Image-2023-09-05-at-4.28.02-PM-1024x682.jpeg";
// import img2 from "../images/1G5A5237-scaled.jpg";
// import img3 from "../images/DSC01839-scaled.jpg";
// import img4 from "../images/image011.jpg";
// import img5 from "../images/Mega-Drawing-Competition-2-1-2022-76.jpg";
// import img6 from "../images/science-activity-15.jpg";
// import img7 from "../images/so.-science-activity-21.jpg";
// import img8 from "../images/Vigilance-Awareness-Week-1-11-2017-31.jpg";
// import img9 from "../images/vimala_grace_auditorium22.jpg";
// import img10 from "../images/Diwali-celebration-3-11-2018-19.jpg";
// import img11 from "../images/21st_senior_national_archery_championship_22.jpg";
// import img12 from "../images/Art-Exhibition-23-12-2016-5.jpg";
// import img13 from "../images/Eco-Day-9-12-2017-23.jpg";
// import img14 from "../images/Yoga-day-21-06-2016-21.jpg";
// import img15 from "../images/DSC03274.jpg";
// import img16 from "../images/IMG_20141018_101928-scaled.jpg";
// import img17 from "../images/annual-sports-56.jpg";
// import img18 from "../images/Plantation-1-7-2017-15.jpg";
// import img19 from "../images/Class-9.jpg";
// import img20 from "../images/IMG_20141018_084040-scaled.jpg";
// import img21 from "../images/IMG_20141018_100156-scaled.jpg";
// import img22 from "../images/DSC01627-scaled.jpg";
// import img23 from "../images/WhatsApp_Image_2023-08-28_at_18.52.38_me5duf-2.jpg";
// import img24 from "../images/IMG_5986-2-scaled.jpg";
// import img25 from "../images/DSC05776-scaled.jpg";
// import img26 from "../images/Vimala-Grace-Auditorium21.jpg";
// import img27 from "../images/Vimala-Grace-Auditorium27.jpg";
// import img28 from "../images/Vimala-Grace-Auditorium7.jpg";
// import img29 from "../images/vimala_grace_auditorium20.jpg";
// import img30 from "../images/FEE-Discount-CHEQUE-Distribuation-19-04-23-16.jpg";
// import img31 from "../images/FEE-Discount-CHEQUE-Distribuation-19-04-23-15.jpg";
// import img32 from "../images/FEE-Discount-CHEQUE-Distribuation-19-04-23-4.jpg";
// import img33 from "../images/FEE-Discount-CHEQUE-Distribuation-19-04-23-2.jpg";
// import img34 from "../images/FEE-Discount-CHEQUE-Distribuation-19-04-23-1.jpg";
import new1 from "../all imgs/home/paint.png"
import new2 from "../all imgs/home/robot.jpg"
import new3 from "../all imgs/home/science.jpg"
import new4 from "../all imgs/home/exhibition.jpg"
import new5 from "../all imgs/home/explaining.jpg"
import new6 from "../all imgs/home/explain.jpg"
import new7 from "../all imgs/home/craft.jpg"
import new8 from "../all imgs/home/newcraft.png"
import new9 from "../all imgs/home/americandance.jpg"
import new10 from "../all imgs/home/dance2.jpg"
import new11 from "../all imgs/home/garden.jpg"
import new12 from "../all imgs/home/exam.jpg"
import new13 from "../all imgs/home/exami.png"
import new14 from "../all imgs/home/first.jpg"
import new15 from "../all imgs/home/teacher.jpg"
import new16 from "../all imgs/home/projector.jpeg"
import new17 from "../all imgs/home/computerlab.jpg"
import new18 from "../all imgs/home/advanced1.jpg"
import new19 from "../all imgs/home/advanced2.jpeg"
import new20 from "../all imgs/home/advanced3.webp"
import new21 from "../all imgs/home/advanced4.webp"
import new22 from "../all imgs/home/parent1.jpg"
import new23 from "../all imgs/home/parent2.webp"
import excellence from "../all imgs/home/excellence2.jpg"
import OursSchoolCard from "./OursSchoolCard";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Header2 from "../Layout/Header2";
import Copy from "../Layout/Copy";

const OurSchool = () => {
  return (
    <StyledDiv>
      <Header/>
      <Header2 heading="Our School"/>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,600;8..144,700;8..144,900&family=Sofia&display=swap"
          rel="stylesheet"
        />
        {/* second one */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,600;8..144,700;8..144,900&family=RocknRoll+One&family=Sofia&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center text-center">
              <h1 className="tophead align-items-center">
                MAIN PRIORITIES AT DOAGURU SCHOOL
              </h1>
            </div>
            <div className="">
              <p className="toppara text-center" data-aos="fade-right">
              Doaguru School in Jabalpur prioritizes the happiness, security, and safety of every child. With a nurturing environment, experienced staff, and rigorous safety measures, the school is dedicated to creating a joyful and secure space where students can learn, grow, and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <h2 className="mdhead text-center">
          "Explore Doaguru School: Where Learning and Joy Connect."
          </h2>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row m-2">
          <div className="col-lg-6 col-md-12 ">
            <img src={excellence} alt="jsss" className="academic img-fluid img1" data-aos="zoom-in" />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="text-start" data-aos="fade-left">
              <h2 className="bothead">Academic Excellence</h2>
              <p className="botpara">
              At Doaguru School, education goes beyond the classroom. We offer opportunities that encourage students to explore, develop, and think critically. These experiences broaden their perspectives and ignite their curiosity, shaping them into thoughtful and inquisitive individuals.
              </p>
              <p className="botpara">
                {" "}
                At Doaguru School, our curriculum prepares early years students for a smooth transition to primary school.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 m-2">
          <div className="col-lg-6 col-md-12 ">
            <div data-aos="fade-right">
              <h2 className="bothead2">Holistic Approach</h2>
              <p className="botpara">
              Doaguru School rejects a uniform approach, championing a holistic method to education. We aim to blend different educational philosophies, fostering an environment where educators guide students in "how" to learn, rather than relying solely on rote memorization of "what" to learn.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <Carousel fade id="carouselExampleFade" interval={3000}  data-aos="zoom-in">
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new1}
                  alt="First slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new2}
                  alt="Second slide"
                  
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new3}
                  alt="Third slide"
                  
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new4}
                  alt="four slide"
                  
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new5}
                  alt="five slide"
                  
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new6}
                  alt="six slide"
                  
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new7}
                  alt="seven slide"
                  
                />
              </Carousel.Item>
              {/* Add more Carousel.Item for additional slides */}
            </Carousel>
          </div>
        </div>

        <div className="row mt-5 m-2">
          <div className="col-lg-6 col-md-12">
            <Carousel fade id="carouselExampleFade" interval={3000} data-aos="zoom-in">
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new8}
                  alt="First slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new9}
                  alt="Second slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new10}
                  alt="Third slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new11}
                  alt="four slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new12}
                  alt="five slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img14}
                  alt="six slide"
                  style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item> */}
              {/* <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img15}
                  alt="seven slide"
                  style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item> */}
              {/* <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img16}
                  alt="seven slide"
                  style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item> */}
              {/* <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img17}
                  alt="seven slide"
                  style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item> */}
              {/* <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img18}
                  alt="seven slide"
                  style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item> */}
              {/* Add more Carousel.Item for additional slides */}
            </Carousel>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="text-start" data-aos="fade-left">
              <h2 className="bothead">Extracurricular Excellence</h2>
              <p className="botpara">
              Every day at Doaguru School, a special period is dedicated to enriching co-curricular activities. Students engage in a variety of pursuits, including Indian Classical and Group Dance, Karate, Yoga, Fencing, Vocal Music, Craft, and Handwork. They also participate in dramatics, debates, elocution, and games. These activities culminate in their performances during the Annual Prize Distribution and Sports Day.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 m-2">
          <div className="col-lg-6 col-md-12 ">
            <div data-aos="fade-right">
              <h2 className="bothead">Values and Ethics</h2>
              <p className="botpara">
              Our goal at Doaguru School is to elevate our students' standards by fostering a school ethos grounded in core values. These values support each child's growth as a reflective learner within a calm, caring, and purposeful environment.
              </p>
              <p className="botpara">
              At Doaguru School, Value-based Education (VBE) plays a crucial role in shaping a positive and impactful school environment. It influences the entire curriculum, focusing on Spiritual, Moral, Social, and Cultural (SMSC) development, Personal, Social, and Health Education (PSHE), and the incorporation of Indian values.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <Carousel fade id="carouselExampleFade" interval={3000} data-aos="zoom-in">
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new12}
                  alt="First slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new13}
                  alt="Second slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new14}
                  alt="Third slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new15}
                  alt="four slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="row mt-5 m-2">
          <div className="col-lg-6 col-md-12">
            <Carousel fade id="carouselExampleFade" interval={3000} data-aos="zoom-in">
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new16}
                  alt="First slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg d-block img-fluid img1"
                  src={new17}
                  alt="Second slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="text-start" data-aos="fade-left">
              <h2 className="bothead">Technology Integration</h2>
              <p className="botpara">
              At Doaguru School, we embrace the digital era by seamlessly integrating technology into our teaching methods. Interactive classrooms and digital resources enhance the learning experience and better prepare students for the challenges of the modern world.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 m-2">
          <div className="col-lg-6 col-md-12 ">
            <div data-aos="fade-right">
              <h2 className="bothead">State-of-the-Art Facilities</h2>
              <p className="botpara">
              Our facilities harness the latest innovations to advance development, production, and research, establishing new benchmarks for capability, efficiency, and quality.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <Carousel fade id="carouselExampleFade" interval={3000} data-aos="zoom-in">
              <Carousel.Item>
                <img
                  className="Holisticimg  d-block img-fluid img1"
                  src={new18}
                  alt="First slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg  d-block img-fluid img1"
                  src={new19}
                  alt="Second slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg  d-block img-fluid img1"
                  src={new20}
                  alt="Third slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg  d-block img-fluid img1"
                  src={new21}
                  alt="four slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img29}
                  alt="four slide"
                  style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item> */}
            </Carousel>
          </div>
        </div>

        <div className="row my-5 m-2">
          <div className="col-lg-6 col-md-12">
            <Carousel fade id="carouselExampleFade" interval={3000} data-aos="zoom-in">
              <Carousel.Item>
                <img
                  className="Holisticimg  d-block img-fluid img1"
                  src={new22}
                  alt="First slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Holisticimg  d-block img-fluid img1"
                  src={new23}
                  alt="Second slide"
                  // style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img32}
                  alt="Second slide"
                  style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item> */}
              {/* <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img33}
                  alt="Second slide"
                  style={{ width: "100%", height: "350px" }}
                />
                 <Carousel.Item>
                <img
                  className="d-block img-fluid img1"
                  src={img34}
                  alt="Second slide"
                  style={{ width: "100%", height: "350px" }}
                />
              </Carousel.Item>
              </Carousel.Item> */}
            </Carousel>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="text-start " data-aos="fade-left">
              <h2 className="bothead">Parent Partnership</h2>
              <p className="botpara">
              Doaguru School acknowledges the pivotal role of parents in education. Through open communication, frequent parent-teacher meetings, and collaborative workshops, we create a supportive and engaged community.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <OursSchoolCard/>
      <Footer/>
      <Copy/>
    </StyledDiv>
  );
};

export default OurSchool;
const StyledDiv = styled.div`
  * {
    box-sizing: border-box;
  }

  .Holisticimg {
    width: 100%;
    height: 207px;
  }

  .tophead {
    color: #7d38c6;
    font-family: "Roboto Serif", serif;
    font-size: 20px;
    margin-bottom: 1rem;
  }

  .toppara {
    font-size: 14px;
    margin: 1rem;
    color: #5a626d;
    font-weight: 400;
    
    line-height: 1.5rem ;
  }

  .mdhead {
    font-family: "RocknRoll One", sans-serif;
    color: #7d38c6;
    font-size: 20px;
  }

  .img1 {
    border-radius: 15px;
  }

  .bothead {
    color: #000;
    font-weight: 700;
    margin-top: 2rem;
  }

  .botpara {
    color: #5a626d;
    font-size: 14px;
    font-weight: 400;
    margin-top: 6px;
    line-height: 1.5rem;
  }

  .bothead2 {
    color: #000;
    font-weight: 700;
    margin-top: 2rem;
  
  }

  .bothead4 {
    color: #000;
    font-weight: 700;
    margin-top: 1rem;

    
  }
  .botpara4 {
    color: #5a626d;
    font-size: 20px;
    font-weight: 400;
    margin-top: 1rem;
    line-height: 1.8rem;
  }
  .bothead6 {
    color: #000;
    font-weight: 700;
    margin-top: 2rem;
   
    
  }



 @media (min-width: 430px){


  .Holisticimg {
    width: 100%;
    height: 317px;
  }

}

 @media (min-width: 768px){

  .tophead {
    font-size: 30px;
  }
  
  .mdhead {
    font-size: 30px;
  }

  .toppara {
    font-size: 20px;
    line-height: 1.7rem ;
    letter-spacing: 0.6px;
  }

  .botpara  {
    font-size: 20px;
    letter-spacing: 0.6px;
    line-height: 1.7rem ;
  }



  .Holisticimg {
    width: 100%;
    height: 420px;
  }


 }

 @media (min-width: 992px){

  .tophead {
    font-size: 43px;
  }
  
  .mdhead {
    font-size: 43px;
  }

  .toppara {
    font-size: 18px;
    line-height: 1.8rem ;
    letter-spacing: 0.6px;
  }

  .botpara  {
    font-size: 18px;
    line-height: 1.8rem ;
    letter-spacing: 0.6px;
  }

  .academic {
    margin-top: 50px;
  }

  .Holisticimg {
    width: 100%;
    height: 300px;
  }

}

 @media (min-width: 1200px){

  .botpara  {
    font-size: 20px;
  }
  .toppara  {
    font-size: 20px;
  }

  
  .Holisticimg {
    width: 100%;
    height: 330px;
  }


}
`;