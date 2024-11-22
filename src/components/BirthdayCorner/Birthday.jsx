import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import audio1 from '../BirthdayCorner/Birthday1.mp3';
import audio2 from '../BirthdayCorner/Birthday2.mp3';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Copy from '../../Layout/Copy';
import Video from '../Student_Corner/Brithday_Corner/Video';

const Birthday = () => {
  // Manually input details here
  const [details, setDetails] = useState([
    { name: 'Aiden James ', sectionFullName: 'Grade 10A', dob: '08-08-2005' },
    { name: 'Emily Johnson', sectionFullName: 'Grade 9B', dob: '08-08-2006' },
    { name: 'Liam Alexander', sectionFullName: 'Grade 11C', dob: '09-08-2004' },
    // Add more manually entered student data as needed
  ]);
  const [todaysBirthdays, setTodaysBirthdays] = useState([]);
  const [audioIndex, setAudioIndex] = useState(0);

  useEffect(() => {
    const today = new Date();

    const birthdaysToday = details
      .filter((user) => {
        // Split the date string into day, month, and year
        const dobParts = user.dob.split("-");
        // Parse the date string parts into integers
        const day = parseInt(dobParts[0], 10);
        const month = parseInt(dobParts[1], 10) - 1; // Months are 0-indexed
        const year = parseInt(dobParts[2], 10);
        // Create a new Date object using the parsed values
        const birthDate = new Date(year, month, day);
        // Check if the birthDate is today
        return (
          birthDate.getMonth() === today.getMonth() &&
          birthDate.getDate() === today.getDate()
        );
      });

    setTodaysBirthdays(birthdaysToday);
  }, [details]);

  const audioSources = [
    audio1,
    audio2
    // Add more audio sources if needed
  ];

  const handleAudioPlay = (index) => {
    setAudioIndex(index);
  };

  return (
    <>
      <Header />
      <Video />
      <Container>
        <div className="head-container">
          {todaysBirthdays.length > 0 ? (
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {todaysBirthdays.map((birthday, index) => (
                <div key={index} className="col-md-4">
                  <div className='cardb' style={{ width: '300px', margin: '30px 40px' }}
                    onMouseEnter={() => handleAudioPlay(index)}
                    onMouseLeave={() => setAudioIndex(-1)}>
                    <audio className="audioPlayer" src={audioSources[index]} autoPlay={audioIndex === index} />
                    <div className='back'></div>
                    <div className='front'>
                      <div className='imgset'>
                        <img width='100%' src='https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png' alt='birthday' />
                      </div>
                    </div>
                    <div className='text-container'>
                      <p id='head'>Happy Birthday</p>
                      <p id='head'>{birthday.name}</p>
                      <p id='head'>{birthday.sectionFullName}</p>
                      <p>I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-container" style={{ textAlign: 'center', margin: '40px' }}>
              <h1>No birthdays today. Check back tomorrow!</h1>
            </div>
          )}
        </div>
      </Container>
      <Footer />
      <Copy />
    </>
  );
}

export default Birthday;

const Container = styled.div`
overflow: hidden;
  .card-img {
            width: 100%;
            height: 800px;
        }

        /* Header/Logo Title */
        .header {
            padding: 60px;
            text-align: center;
            color: white;
            font-size: 30px;
        }

        .head-container {
            background-color: 	#F3E5AB;
        }

        body {
            background-image: linear-gradient(to right top, #4d4dff, #4d4dff, #4d4dff, #4d4dff, #4d4dff);
            height: 100%;
            margin: 0;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

        .cardb {
            position: relative;
            width: 300px;
            height: 425px;
            border: 10px solid #9612eb;
            margin: 60px auto 0 auto;
            box-shadow: inset 10px 0px 15px 0px rgba(0, 0, 0, 0.1);
            background-image: linear-gradient(to bottom, rgba(255, 255, 255), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");

            background-position: center;
            /* Center the image */
            background-repeat: no-repeat;
            /* Do not repeat the image */
            background-size: cover;
            background-color: #e6f0e6;
        }

        .cardb .text-container {
            width: 80%;
            height: 80%;
            margin: auto;
        }

        .strikethrough {
            text-decoration: line-through;
        }

        .cardb .text-container #head {
            font-family: 'Nobile', sans-serif;
            font-size: 1.5em;
            margin: 5px auto 5px auto;
        }

        .cardb p {
            font-size: 1.1em;
            line-height: 1.4;
            font-family: 'Nobile';
            color: #331717;
            font-style: italic;
            text-align: center;
            margin: 30px auto 0px auto;
        }

        .cardb .front {
            position: absolute;
            width: 100%;
            height: 100%;
            margin: -10px 0px 0px -10px;
            border: 10px solid #4d4dff;
            backface-visibility: hidden;
            background-color: #4d4dff;
            /* background-image: url($cover-image);
        */
            background-size: contain;
            transform-style: preserve-3d;
            transform-origin: 0% 50%;
            transform: perspective(800px) rotateY(0deg);
            transition: all 0.8s ease-in-out;
        }

        .cardb:hover .front {
            transform: perspective(800px) rotateY(-170deg);
            background-color: #41718d;
        }

        .cardb:hover .back {
            transform: perspective(800px) rotateY(-170deg);
            box-shadow: 7px 0px 5px 0px rgba(0, 0, 0, 0.3), inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1);
            background-color: #d2dcd2;
        }

        .cardb .back {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 10px solid #9612eb;
            margin: -10px 0px 0px -10px;
            backface-visibility: visible;
            filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, .5));
            transform-style: preserve-3d;
            transform-origin: 0% 50%;
            transform: perspective(800px) rotateY(0deg);
            transition: all 0.8s ease-in-out;
            background-color: #e6f0e6;
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        }

        .imgset {
            position: relative;
            z-index: 1;
            margin-bottom: -215px;
        }

        .imgset img {
            box-shadow: 0px 6px 11px 7px rgba(0, 0, 0, 0.22);
            border-radius: 5px;
        }

        .video-container {
            max-width: 100%;
            margin: 0px auto;

        }

        video {
            width: 100%;
        }

        .text-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* Center vertically */
            align-items: center;
            /* Center horizontally */
            height: 100%;
            /* Ensure it takes the full height of its parent */
        }
`




