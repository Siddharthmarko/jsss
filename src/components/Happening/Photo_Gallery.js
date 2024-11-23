import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Footer from "../../Layout/Footer";
import Copy from "../../Layout/Copy";

const Photo_Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState(null);

  // Static data for cardData (we will no longer use this)
  const cardData = [
    {
      id: 1,
      title: "Event 1",
      year: 2023,
      cardImageUrl: "https://placeimg.com/300/200/tech",
    },
    {
      id: 2,
      title: "Event 2",
      year: 2022,
      cardImageUrl: "https://placeimg.com/300/200/nature",
    },
    {
      id: 3,
      title: "Event 3",
      year: 2021,
      cardImageUrl: "https://placeimg.com/300/200/people",
    },
  ];

  const uniqueYears = [...new Set(cardData.map((card) => card.year))];

  return (
    <>
      <Header />
      <Header2 heading="Photo Gallery" />

      <Wrapper>
        <div className="container mb-5 mt-5">
          <div className="d-flex justify-content-center">
            <select
              className="form-select mx-2"
              aria-label="Default select example"
              value={filterYear || ""}
              onChange={(e) => setFilterYear(e.target.value || null)}
            >
              <option value="">All</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          {/* You can now remove the code that renders cards, leaving the gallery images section */}
        </div>

        {/* Gallery Images */}
        <div className="m-4">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://media.istockphoto.com/id/1146902501/photo/school-children-jumping-and-celebrating-in-school-campus.jpg?s=612x612&w=0&k=20&c=rSETssGcQbFELUNmMAMNRSloiqMeB5noBfCIfgOkAVQ="
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />

              <img
                src="https://images.pexels.com/photos/8441831/pexels-photo-8441831.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://images.pexels.com/photos/8926457/pexels-photo-8926457.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />

              <img
                src="https://media.istockphoto.com/id/1280864057/photo/girl-with-face-mask-back-at-school-after-covid-19-quarantine-and-lockdown-raising-hand.jpg?s=612x612&w=0&k=20&c=GCXWoPt0eo4qUtoPFyuzkCDObV7ymZm-CteKt1y94BA="
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://media.istockphoto.com/id/1148232091/photo/teacher-explaining-to-students-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=jT-_JQ_IEBXhKUGtbtI98dJtPIb20ovr0WgrvvMsXvU="
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />

              <img
                src="https://images.pexels.com/photos/8612980/pexels-photo-8612980.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />
            </div>
          </div>
        </div>
        {/* Gallery Images */}
      </Wrapper>
      <Footer />
      <Copy />
    </>
  );
};

export default Photo_Gallery;

const Wrapper = styled.div`
  .form-control {
    width: 25%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .form-select {
    width: 10%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
