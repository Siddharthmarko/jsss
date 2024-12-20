import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
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
                   
                  </ul>
                </li>
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

              
                <li className="nav-item mx-2">
                  <Link
                    to="/contact-us"
                    className="nav-link text-light "
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     


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
}`;