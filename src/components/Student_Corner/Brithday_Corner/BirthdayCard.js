

import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
// import  class9 from "../images/Diwali-celebration-3-11-2018-19.jpg"
import Sound from 'react-sound';
import birthdaySound from "../../../assets/Birthday1.mp3";
import birthdaySound1 from "../../../assets/Birthday2.mp3";
import birthdaySound2 from "../../../assets/Birthday3.mp3";
import birthdaySound3 from "../../../assets/Birthday4.mp3";


const Wrapper = styled.div`
  
  background-color: #4d4dff;
`;

const PhotoCard = styled.div`
   #photo {
        border-radius: 2rem;
        width: 300px;
            height: 425px;
            /* background-image: linear-gradient(to bottom, rgba(255, 255, 255), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"); */
            border: 10px solid #9612eb;
            /* margin: 60px auto 0 auto; */
            box-shadow: inset 10px 0px 15px 0px rgba(0, 0, 0, 0.1);
            background-image: linear-gradient(to bottom, rgba(255, 255, 255), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");

            background-position: center;
            /* Center the image */
            background-repeat: no-repeat;
            /* Do not repeat the image */
            background-size: cover;
            background-color: #e6f0e6;
   @media screen and (max-width: 768px) {
      margin-left: 1.5rem;
    }
   
 }
`;

function BirthdayCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [playStatus1, setPlayStatus1] = useState(Sound.status.STOPPED);
  const [playStatus2, setPlayStatus2] = useState(Sound.status.STOPPED);
  const [playStatus3, setPlayStatus3] = useState(Sound.status.STOPPED);


  const handleHover = () => {
    if (playStatus !== Sound.status.PLAYING) {
      setPlayStatus(Sound.status.PLAYING);
    }
  };

  const handleLeave = () => {
    setPlayStatus(Sound.status.STOPPED);
  };



  const handleHover1 = () => {
    if (playStatus1 !== Sound.status.PLAYING) {
      setPlayStatus1(Sound.status.PLAYING);
    }
  };

  const handleLeave1 = () => {
    setPlayStatus1(Sound.status.STOPPED);
  };

  const handleHover2 = () => {
    if (playStatus2 !== Sound.status.PLAYING) {
      setPlayStatus2(Sound.status.PLAYING);
    }
  };

  const handleLeave2 = () => {
    setPlayStatus2(Sound.status.STOPPED);
  };


  const handleHover3 = () => {
    if (playStatus3 !== Sound.status.PLAYING) {
      setPlayStatus3(Sound.status.PLAYING);
    }
  };

  const handleLeave3 = () => {
    setPlayStatus3(Sound.status.STOPPED);
  };





  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  const flipCard1 = () => {
    setIsFlipped1(!isFlipped1);
  };
  const flipCard2 = () => {
    setIsFlipped2(!isFlipped2);
  };
  const flipCard3 = () => {
    setIsFlipped3(!isFlipped3);
  };
  const flipCard4 = () => {
    setIsFlipped4(!isFlipped4);
  };
  const flipCard5 = () => {
    setIsFlipped5(!isFlipped5);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md- col-sm-12 mt-5">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
              {/* Front Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build">
                <PhotoCard onClick={flipCard} id="cardshadow1">
                  <img
                    src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    className="card-img-top"
                    alt="..."
                    id="photo"
                  />
                </PhotoCard>
              </div>

              {/* Back Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build"

                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onClick={handleHover}
                role="button"
              >

                <PhotoCard onClick={flipCard} id="cardshadow1">
                  <div className="card" id='photo' >
                    <div className="text-center mt-3">
                      <h4>Happy Brithday</h4>
                      <h4>John Michael Smith</h4>
                      <h4>ll-D</h4>

                      <p className='mt-5 m-3'>I hope your special day brings you abundant happiness, love, and joy. You truly deserve it all. Enjoy every moment!</p>
                    </div>

                  </div>
                </PhotoCard>
                <Sound
                  url={birthdaySound}
                  playStatus={playStatus}
                  onFinishedPlaying={handleLeave}

                />
              </div>
            </ReactCardFlip>
          </div>
          <div className="col-lg-4 col-md- col-sm-12 mt-5">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped1}>
              {/* Front Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build">
                <PhotoCard onClick={flipCard1} id="cardshadow1">
                  <img
                    src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    className="card-img-top"
                    alt="..."
                    id="photo"
                  />
                </PhotoCard>
              </div>

              {/* Back Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build"
                onMouseEnter={handleHover1}
                onMouseLeave={handleLeave1}
                onClick={handleHover1}
                role="button"
              >
                <PhotoCard onClick={flipCard1} id="cardshadow1">
                  <div className="card" id='photo' >
                    <div className="text-center mt-3">
                      <h4>Happy Brithday</h4>
                      <h4>Jackson Michael Davis</h4>
                      <h4>ll-D</h4>

                      <p className='mt-5 m-3'>Wishing you a wonderful day filled with happiness, love, and joy. You deserve all the best. Have a fantastic time!</p>
                    </div>

                  </div>
                </PhotoCard>
                <Sound
                  url={birthdaySound1}
                  playStatus={playStatus1}
                  onFinishedPlaying={handleLeave1}

                />
              </div>
            </ReactCardFlip>
          </div>
          <div className="col-lg-4 col-md- col-sm-12 mt-5">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped2}>
              {/* Front Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build"


              >
                <PhotoCard onClick={flipCard2} id="cardshadow1">
                  <img
                    src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    className="card-img-top"
                    alt="..."
                    id="photo"
                  />
                </PhotoCard>

              </div>

              {/* Back Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build"
                onMouseEnter={handleHover2}
                onMouseLeave={handleLeave2}
                onClick={handleHover2}
                role="button"
              >
                <PhotoCard onClick={flipCard2} id="cardshadow1">
                  <div className="card" id='photo' >
                    <div className="text-center mt-3">
                      <h4>Happy Brithday</h4>
                      <h4>Noah Benjamin Wilson</h4>
                      <h4>ll-D</h4>

                      <p className='mt-5 m-3'>Wishing you a wonderful day filled with happiness, love, and joy. You deserve all the best. Have a fantastic time!</p>
                    </div>

                  </div>
                </PhotoCard>
                <Sound
                  url={birthdaySound2}
                  playStatus={playStatus2}
                  onFinishedPlaying={handleLeave2}

                />
              </div>
            </ReactCardFlip>
          </div>

          <div className="col-lg-4 col-md- col-sm-12 mt-5">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped3}>
              {/* Front Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build"

              >
                <PhotoCard onClick={flipCard3} id="cardshadow1">
                  <img
                    src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    className="card-img-top"
                    alt="..."
                    id="photo"
                  />
                </PhotoCard>
              </div>

              {/* Back Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build"
                onMouseEnter={handleHover3}
                onMouseLeave={handleLeave3}
                onClick={handleHover3}
                role="button"
              >
                <PhotoCard onClick={flipCard3} id="cardshadow1">
                  <div className="card" id='photo' >
                    <div className="text-center mt-3">
                      <h4>Happy Brithday</h4>
                      <h4>Alexander Ryan Martinez</h4>
                      <h4>ll-D</h4>

                      <p className='mt-5 m-3'>Wishing you a wonderful day filled with happiness, love, and joy. You deserve all the best. Have a fantastic time!</p>
                    </div>

                  </div>
                </PhotoCard>
                <Sound
                  url={birthdaySound3}
                  playStatus={playStatus3}
                  onFinishedPlaying={handleLeave3}

                />
              </div>
            </ReactCardFlip>
          </div>
          <div className="col-lg-4 col-md- col-sm-12 mt-5">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped4}>
              {/* Front Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build">
                <PhotoCard onClick={flipCard4} id="cardshadow1">
                  <img
                    src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    className="card-img-top"
                    alt="..."
                    id="photo"
                  />
                </PhotoCard>
              </div>

              {/* Back Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onClick={handleHover}
                role="button"
              >
                <PhotoCard onClick={flipCard4} id="cardshadow1">
                  <div className="card" id='photo' >
                    <div className="text-center mt-3">
                      <h4>Happy Brithday</h4>
                      <h4>Mia Elizabeth Brown</h4>
                      <h4>ll-D</h4>

                      <p className='mt-5 m-3'>Wishing you a wonderful day filled with happiness, love, and joy. You deserve all the best. Have a fantastic time!</p>
                    </div>

                  </div>
                </PhotoCard>
                <Sound
                  url={birthdaySound}
                  playStatus={playStatus}
                  onFinishedPlaying={handleLeave}

                />
              </div>
            </ReactCardFlip>
          </div>
          <div className="col-lg-4 col-md- col-sm-12 mt-5">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped5}>
              {/* Front Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build">
                <PhotoCard onClick={flipCard5} id="cardshadow1">
                  <img
                    src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    className="card-img-top"
                    alt="..."
                    id="photo"
                  />
                </PhotoCard>
              </div>

              {/* Back Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" id="build"
                onMouseEnter={handleHover2}
                onMouseLeave={handleLeave2}
                onClick={handleHover2}
                role="button"

              >
                <PhotoCard onClick={flipCard5} id="cardshadow1">
                  <div className="card" id='photo' >
                    <div className="text-center mt-3">
                      <h4>Happy Brithday</h4>
                      <h4>Ella Marie White</h4>
                      <h4>ll-D</h4>

                      <p className='mt-5 m-3'>Wishing you a wonderful day filled with happiness, love, and joy. You deserve all the best. Have a fantastic time!</p>
                    </div>

                  </div>
                </PhotoCard>
                <Sound
                  url={birthdaySound2}
                  playStatus={playStatus2}
                  onFinishedPlaying={handleLeave2}

                />
              </div>
            </ReactCardFlip>
          </div>


        </div>

      </div>

    </Wrapper>
  );
}

export default BirthdayCard;
