import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import pdf from "../all imgs/Mandatory-Disclosure-Details-_-SARAS-4.0-2023-24-1New.pdf";
import pdf2 from "../all imgs/Fee-instructions-2023-24-1.pdf";
import pdf3 from "../all imgs/Fee-Structure-2023-24-b9.pdf";
import pdf4 from "../all imgs/Book-List-I-X-2023-24.pdf";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Header() {


  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Define a mapping of page names to URLs
      const pageMap = {
        'home': '/',
        'founder and manager': '/meet-our-founder-manager',
        'founder': '/meet-our-founder-manager',
        'manager': '/meet-our-founder-manager',
        'school': '/our-school',
        'our school': '/our-school',
        'school magazine': '/our-magazine',
        'magazine': '/our-magazine',
        'vision and mission': '/our-vision-and-mission',
        'vision': '/our-vision-and-mission',
        'mission': '/our-vision-and-mission',
        'event': '/events',
        'events': '/events',
        'mediacorner': '/media-corner',
        'media corner': '/media-corner',
        'media': '/media-corner',
        'photogallery': '/photo-gallerys',
        'photo-gallery': '/photo-gallerys',
        'photo gallery': '/photo-gallerys',
        'gallery': '/photo-gallerys',
        'photo': '/photo-gallerys',
        'photos': '/photo-gallerys',
        'sports gallery': '/sports-gallery',
        'sportsgallery': '/sports-gallery',
        'gallery': '/sports-gallery',
        'sports': '/sports-gallery',
        'activities': '/activities',
        'annualschoolcalender': '/school-annual-calendar',
        'annual school calender': '/school-annual-calendar',
        'calender': '/school-annual-calendar',
        'schoolcalender': '/school-annual-calendar',
        'school calender': '/school-annual-calendar',
        'awards & achievements': '/awards-and-achievements',
        'award & achievement': '/awards-and-achievements',
        'awards&achievements': '/awards-and-achievements',
        'awards and achievements': '/awards-and-achievements',
        'award and achievement': '/awards-and-achievements',
        'awardsandachievements': '/awards-and-achievements',
        'awards': '/awards-and-achievements',
        'achievements': '/awards-and-achievements',
        'birthdaycorner': '/birthday-corner',
        'birthday corner': '/birthday-corner',
        'birthday': '/birthday-corner',
        'our uniform': '/our-uniform',
        'uniform': '/our-uniform',
        'schooluniform': '/our-uniform',
        'school uniform': '/our-uniform',
        'eregistrationdetails': '/eregister',
        'eregistration details': '/eregister',
        'eregister details': '/eregister',
        'eregister': '/eregister',
        'e-register details': '/eregister',
        'e-register': '/eregister',
        'eregistration': '/eregister',
        'privacy-policy': '/privacy-policy',
        'privacypolicy': '/privacy-policy',
        'policy': '/privacy-policy',
        'terms-condition': '/terms-condition',
        'termscondition': '/terms-condition',
        'termsandcondition': '/terms-condition',
        'tandc': '/terms-condition',
        't&c': '/terms-condition',
        'contact-us': '/contact-us',
        'contactus': '/contact-us',
        'contact us': '/contact-us',
        'contact': '/contact-us',
        // Add other pages as needed
      };

      // Redirect to the corresponding page if found
      const trimmedQuery = query.trim().toLowerCase();
      if (pageMap[trimmedQuery]) {
        navigate(pageMap[trimmedQuery]);
      } else {
        alert('Page not found');
      }
    }
  };

  return (
    <StyledDiv>
      <div className="mt-0 pt-0 d-flex justify-content-around" style={{ background: "#7d38c6" }}>
        <nav
          className="navbar navbar-expand-lg py-3"       // navbar-expand for line-navbar or without  

        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-control="navbar"
              aria-expand="false"
              aria-lable="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav mx-auto mb-lg-0">
                <li className="nav-item mx-2">
                  <Link to="/" className="nav-link text-light ">
                    <i class="bi bi-house-door-fill"></i>
                  </Link>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle text-light mx-2"
                    data-bs-toggle="dropdown"
                  >
                    About Us
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{ background: "#7d38c6", borderRadius: "0px" }}
                  >
                    {/* <li>
                      <Link
                        to={pdf}
                        target="_blank"
                        className="dropdown-item text-light  "
                      >
                        Mandatory Information
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    /> */}
                    <li>
                      <Link
                        to="/meet-our-founder-manager"
                        className="dropdown-item text-light  "
                      >
                        Meet Our Founder & Manager
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="/our-school"
                        className="dropdown-item text-light"
                      >
                        Our School
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="/our-magazine"
                        className="dropdown-item text-light  "
                      >
                        Our School Magazine
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="/our-vision-and-mission"
                        className="dropdown-item text-light  "
                      >
                        Our Vision And Mission
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item dropdown mx-2">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle text-light "
                    data-bs-toggle="dropdown"
                  >
                    Fees
                  </Link>
                  <ul
                    className="dropdown-menu"
                    style={{ background: "#3883c6", borderRadius: "0px" }}
                  >
                    <li>
                      <Link
                        to={pdf2}
                        target="_blank"
                        className="dropdown-item text-light  "
                      >
                        Fees Payment 2023-2024
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to={pdf3}
                        target="_blank"
                        className="dropdown-item text-light  "
                      >
                        Fees Structure 2023-2024
                      </Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="nav-item dropdown mx-2">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle text-light "
                    data-bs-toggle="dropdown"
                  >
                    School App Link
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{
                      background: "#3883c6",
                      borderRadius: "0px",
                      width: "12rem",
                    }}
                  >
                    <li>
                      <Link
                        to="https://play.google.com/store/apps/details?id=com.db.nascorp.jsss"
                        className="dropdown-item text-light "
                        target="_blank"
                      >
                        For Android Mobile
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="https://apps.apple.com/in/app/joy-sr-sec-school-jabalpur/id1618084721"
                        className="dropdown-item text-light "
                        target="_blank"
                      >
                        For IOS Mobile
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="https://jsss.nascorptechnologies.com/Index"
                        className="dropdown-item text-light  "
                        target="_blank"
                      >
                        For Web Browser
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item dropdown mx-2">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle text-light "
                    data-bs-toggle="dropdown"
                  >
                    Happening
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{
                      background: "#7d38c6",
                      borderRadius: "0px",
                      width: "14rem",
                    }}
                  >
                    <li>
                      <Link to="/events" className="dropdown-item text-light  ">
                        Events
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="/media-corner"
                        className="dropdown-item text-light  "
                      >
                        Media Corner
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="/photo-gallerys"
                        className="dropdown-item text-light  "
                      >
                        Photo Gallery
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="/sports-gallery"
                        className="dropdown-item text-light  "
                      >
                        Sports Gallery
                      </Link>
                    </li>
                    {/* <li>
                    <a href="https://test.doaguru.com/jss/photo-gallery/" className="dropdown-item text-light ">
                      Photo Gallery
                    </a>
                  </li> */}
                    {/* <li>
                    <a href="https://test.doaguru.com/jss/media-corner-2/" className="dropdown-item text-light ">
                      Media Corner
                    </a>
                  </li>
                  <li>
                    <a href="https://test.doaguru.com/jss/our-magazine-copy-2/" className="dropdown-item text-light ">
                      Yoga Day
                    </a>
                  </li> */}
                  </ul>
                </li>
                {/* <li className="nav-item mx-2">
                  <Link to="/latest-events" className="nav-link text-light ">
                    Upcoming Events
                  </Link>
                </li> */}
                <li className="nav-item dropdown mx-2">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle text-light "
                    data-bs-toggle="dropdown"
                  >
                    Student Corner
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{
                      background: "#7d38c6",
                      borderRadius: "0px",
                      width: "14rem",
                    }}
                  >
                    <li>
                      <Link
                        to="/activities"
                        className="dropdown-item text-light  "
                      >
                        Activities
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    <li>
                      <Link
                        to="/school-annual-calendar"
                        className="dropdown-item text-light "
                      >
                        Annual School Calender
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    {/* <li>
                      <Link
                        to="/appointment-with-heads"
                        className="dropdown-item text-light "
                      >
                        Appointment With Heads
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    /> */}
                    <li>
                      <Link
                        to="/awards-and-achievements"
                        className="dropdown-item text-light "
                      >
                        Awards & Achievements
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    {/* <li>
                      <Link
                        to={pdf4}
                        target="_blank"
                        className="dropdown-item text-light "
                      >
                        Book List 2023-24
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    /> */}
                    <li>
                      <Link
                        to="/birthday-corner"
                        className="dropdown-item text-light  "
                      >
                        Birthday Corner
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    />
                    {/* <li>
                      <Link
                        to="/examination-pattern"
                        className="dropdown-item text-light  "
                      >
                        Examination Pattern
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    /> */}
                    {/* <li>
                      <Link
                        to="/download-certificate"
                        className="dropdown-item text-light "
                      >
                        Transfer Certificate
                      </Link>
                    </li>
                    <hr
                      style={{
                        color: "white",
                        height: "0px",
                      }}
                    /> */}
                    <li>
                      <Link
                        to="/our-uniform"
                        className="dropdown-item text-light "
                      >
                        Our Uniform
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/eregister" className="nav-link text-light">
                    e-Registeration
                  </Link>
                </li>

                {/* <li className="nav-item mx-2">
                  <a className="nav-link text-light" style={{ cursor: 'pointer' }}>
                    Buy Images
                  </a>
                </li> */}
                {/* <li className="nav-item mx-2">
                  <a
                    className="nav-link text-light " style={{ cursor: 'pointer' }}
                  >
                    Notice Board
                  </a>
                </li> */}
                <li className="nav-item mx-2">
                  <a
                    // href="https://jss.joyseniorsecondary.ac.in/contactus"
                    href="/contact-us"
                    className="nav-link text-light "
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="search-container d-flex align-items-center">
          <div className="search-btn">
            <FaSearch className="text-white search-icon" />
          </div>
          <input
            type="text"
            className="search-hover"
            placeholder="Search here..."

          />
        </div> */}


        {/* new one  */}


        <div className="search-container d-flex align-items-center">
          <input
            type="text"
            className="search-hover"
            placeholder="Search here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress} // Changed to onKeyDown for better handling
          />
          <div className="search-btn">
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>


    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .dropdown-menu a:hover {
    background-color: #862ce7;
    color: black;
  }
  li {
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 600;
    @media (min-width: 900px) and (max-width: 1200px) {
      font-weight: 200;
      font-size: 10px !important;
    }
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-image: var(--bs-navbar-toggler-icon-bg) !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  .search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-btn {
  position: absolute;
  right: 0px; //Position the icon inside the input field
  top: 50%;
  transform: translateY(-50%); /* Center the icon vertically */
  z-index: 2; /* Ensure the icon is above the input */
  cursor: pointer;
  transition: opacity 0.5s, color 0.5s; // Transition for color change
  color: white; /* Default color */
  padding: 12.5px;
  border-radius: 0px 12px 12px 0px;
}

.search-icon {
  font-size: 20px;
  transition: color 0.5s; /* Smooth color transition */
  
}



.search-hover {
  border: 1px solid white;
  outline: none;
  border-radius: 12px;
  width: 0;
  height: 50px;
  padding: 0 0 0 10px; /* Space for the icon */
  opacity: 0;
  visibility: hidden;
  transition: width 0.5s, padding 0.5s, opacity 0.5s, visibility 0.5s;
}

.search-container:hover .search-hover,
.search-hover:focus {
  width: 300px;
  background-color: white;
  padding-left: 20px; /* Ensure there's enough space for the icon */
  opacity: 1;
  visibility: visible;
}

.search-container:hover .search-btn {
  background-color: #e4dede;
  color: white;
}

.search-container:hover .search-icon:hover {
  font-size: 22px;
}

.search-container:hover .search-btn,
.search-hover:focus + .search-btn {
  opacity: 1; /* Ensure the icon is visible */
}

.search-hover:focus + .search-btn .search-icon,
.search-container:hover .search-btn .search-icon {
  color: black; /* Change icon color to black */
}








  /* .icon-btn:hover {
    background-color: darkgray;
  }
  
  .icon-btn:hover .icon {
    color: white;
  } */
`;

// import React from "react";
// import styled from "styled-components";
// import { GiHamburgerMenu } from "react-icons/gi";
// import pdf from '../all imgs/Mandatory-Disclosure-Details-_-SARAS-4.0-2023-24-1New.pdf'
// import pdf2 from '../all imgs/Fee-instructions-2023-24-1.pdf'
// import pdf3 from '../all imgs/Fee-Structure-2023-24-b9.pdf'
// import pdf4 from '../all imgs/Book-List-I-X-2023-24.pdf'
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <StyledDiv>
//       <div className="mt-0 pt-0">
//         <nav className="navbar navbar-expand-lg py-3" style={{background:"#3883c6"}}>
//           <div className="container-fluid">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbar"
//               aria-control="navbar"
//               aria-expand="false"
//               aria-lable="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div
//               className="collapse navbar-collapse"
//               id="navbar">
//               <ul className="navbar-nav mx-auto mb-lg-0">
//                 <li className="nav-item mx-2">
//                   <a
//                     href="/"
//                     className="nav-link text-light">
//                     <i class="bi bi-house-door-fill"></i>
//                   </a>
//                 </li>
//                 <li className="nav-item dropdown mx-2">
//                   <a
//                     href="#"
//                     className="nav-link dropdown-toggle text-light"
//                     data-bs-toggle="dropdown" >
//                     About Us
//                   </a>
//                   <ul className="dropdown-menu" style={{background:"#3883c6"}}>
//                     <li>
//                       <Link
//                         to={pdf}
//                         target="_blank"
//                         className="dropdown-item text-light p-3" >
//                         Mandatory
//                         Information
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/meet-our-founder-manager "
//                         className="dropdown-item text-light p-3" >
//                         Meet Our Founder
//                         & Manager
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/our-school"
//                         className="dropdown-item text-light p-3" >
//                         Our School
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/our-magazine"
//                         className="dropdown-item text-light p-3" >
//                         Our School
//                         Magazine
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/our-vision-and-mission"
//                         className="dropdown-item text-light p-3" >
//                         Our Vision And
//                         Mission
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown mx-2">
//                   <Link
//                     to="#"
//                     className="nav-link dropdown-toggle text-light"
//                     data-bs-toggle="dropdown" >
//                     Fees
//                   </Link>
//                   <ul className="dropdown-menu" style={{background:"#3883c6"}}>
//                     <li>
//                       <Link
//                        to={pdf2}
//                        target="_blank"
//                         className="dropdown-item text-light p-3">
//                         Fees Payment
//                         2023-2024
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to={pdf3}
//                         target="_blank"
//                         className="dropdown-item text-light p-3">
//                         Fees Structure
//                         2023-2024
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown mx-2">
//                   <a
//                     href="#"
//                     className="nav-link dropdown-toggle text-light"
//                     data-bs-toggle="dropdown">
//                     School App Link
//                   </a>
//                   <ul className="dropdown-menu" style={{background:"#3883c6"}}>
//                     <li>
//                       <Link
//                         to="https://play.google.com/store/apps/details?id=com.db.nascorp.jsss"
//                         className="dropdown-item text-light p-3">
//                         For Android
//                         Mobile
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="https://apps.apple.com/in/app/joy-sr-sec-school-jabalpur/id1618084721"
//                         className="dropdown-item text-light p-3">
//                         For IOS Mobile
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="https://jsss.nascorptechnologies.com/Index"
//                         className="dropdown-item text-light p-3">
//                         For Web Browser
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown mx-2">
//                   <a
//                     href="#"
//                     className="nav-link dropdown-toggle text-light"
//                     data-bs-toggle="dropdown">
//                     Happening
//                   </a>
//                   <ul className="dropdown-menu" style={{background:"#3883c6"}}>
//                     <li>
//                       <Link
//                         to="/school-annual-calendar"
//                         className="dropdown-item text-light p-3">
//                         Annual School
//                         Calender
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/events"
//                         className="dropdown-item text-light p-3">
//                         Events
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/media-corner"
//                         className="dropdown-item text-light p-3">
//                         Media Corner
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/photo-gallery"
//                         className="dropdown-item text-light p-3">
//                         Photo Gallery
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/sports-gallery"
//                         className="dropdown-item text-light p-3">
//                         Sports Gallery
//                       </Link>
//                     </li>
//                     {/* <li>
//                     <a href="https://test.doaguru.com/jss/photo-gallery/" className="dropdown-item text-light">
//                       Photo Gallery
//                     </a>
//                   </li> */}
//                     {/* <li>
//                     <a href="https://test.doaguru.com/jss/media-corner-2/" className="dropdown-item text-light">
//                       Media Corner
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://test.doaguru.com/jss/our-magazine-copy-2/" className="dropdown-item text-light">
//                       Yoga Day
//                     </a>
//                   </li> */}
//                   </ul>
//                 </li>
//                 <li className="nav-item mx-2">
//                   <Link
//                     to="/latest-events"
//                     className="nav-link text-light">
//                     Upcoming Events
//                   </Link>
//                 </li>
//                 {/* <li className="nav-item mx-2">
//                 <a href="#" className="nav-link text-light">
//                   Latest Events
//                 </a>
//               </li> */}
//                 <li className="nav-item dropdown mx-2">
//                   <a
//                     href="#"
//                     className="nav-link dropdown-toggle text-light"
//                     data-bs-toggle="dropdown">
//                     Student Corner
//                   </a>
//                   <ul className="dropdown-menu" style={{background:"#3883c6"}}>
//                     <li>
//                       <Link
//                         to="/activities"
//                         className="dropdown-item text-light p-3">
//                         Activities
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/appointment-with-heads"
//                         className="dropdown-item text-light p-3">
//                         Appointment With
//                         Heads
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/awards-and-achievements"
//                         className="dropdown-item text-light p-3">
//                         Awards &
//                         Achievements
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to={pdf4}
//                         target="_blank"
//                         className="dropdown-item text-light p-3">
//                         Book List
//                         2023-24
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/birthday-corner"
//                         className="dropdown-item text-light p-3">
//                         Birthday Corner
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/examination-pattern"
//                         className="dropdown-item text-light p-3">
//                         Examination
//                         Pattern
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/download-certificate"
//                         className="dropdown-item text-light p-3">
//                         Transfer
//                         Certificate
//                       </Link>
//                     </li>
//                     <hr
//                       style={{
//                         color: "white",
//                       }}
//                     />
//                     <li>
//                       <Link
//                         to="/our-uniform"
//                         className="dropdown-item text-light p-3">
//                         Our Uniform
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item mx-2">
//                   <Link
//                     to="/e-register"
//                     className="nav-link text-light">
//                    E-Registeration
//                   </Link>
//                 </li>

//                 <li className="nav-item mx-2">
//                   <a
//                     href="https://jss.joyseniorsecondary.ac.in/gallery-login"
//                     className="nav-link text-light">
//                     Buy Images
//                   </a>
//                 </li>
//                 <li className="nav-item mx-2">
//                   <a
//                     href="https://jss.joyseniorsecondary.ac.in/notice-board"
//                     className="nav-link text-light">
//                     Notice Board
//                   </a>
//                 </li>
//                 <li className="nav-item mx-2">
//                   <a
//                     href="https://jss.joyseniorsecondary.ac.in/contactus"
//                     className="nav-link text-light">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </StyledDiv>
//   );
// }

// const StyledDiv = styled.div`
//   .dropdown-menu a:hover {
//     background-color: #3883c6;
//     color: white;
//   }
//   li{
//     font-family: sans-serif;
//     font-size: 16px;
//     font-weight: 600;
//   }

//   .navbar-toggler-icon{
//     display: inline-block;
//     width: 1.5em;
//     height: 1.5em;
//     vertical-align: middle;
//     background-image: var(--bs-navbar-toggler-icon-bg) !important;
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: 100%;
//   }
// `;
