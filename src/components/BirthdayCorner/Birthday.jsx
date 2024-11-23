import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import audio1 from '../BirthdayCorner/Birthday1.mp3';
import audio2 from '../BirthdayCorner/Birthday2.mp3';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Copy from '../../Layout/Copy';
import Video from '../Student_Corner/Brithday_Corner/Video';

const Birthday = () => {
  const [details] = useState([
    { name: 'Aiden James', sectionFullName: 'Grade 10A', dob: '23-11-2005' },
    { name: 'Emily Johnson', sectionFullName: 'Grade 9B', dob: '23-11-2005' },
    { name: 'Liam Alexander', sectionFullName: 'Grade 11C', dob: '23-11-2005' },
    { name: 'Aiden James', sectionFullName: 'Grade 10A', dob: '23-11-2005' },
  ]);
  const [todaysBirthdays, setTodaysBirthdays] = useState([]);
  const [audioIndex, setAudioIndex] = useState(-1);

  const audioSources = [audio1, audio2];

  const checkTodaysBirthdays = () => {
    const today = new Date();
    const filtered = details.filter(({ dob }) => {
      const [day, month] = dob.split('-').map(Number);
      return (
        today.getDate() === day && today.getMonth() === month - 1 // Months are 0-indexed
      );
    });
    setTodaysBirthdays(filtered);
  };

  useEffect(() => {
    checkTodaysBirthdays();
  }, [details]);

  const handleAudioPlay = (index) => setAudioIndex(index);

  return (
    <>
      <Header />
      <Video />
      <Container>
        <div className="head-container">
          {todaysBirthdays.length > 0 ? (
            <div className="card-container">
              {todaysBirthdays.map((birthday, index) => (
                <BirthdayCard
                  key={index}
                  birthday={birthday}
                  audioSrc={audioSources[index % audioSources.length]}
                  isPlaying={audioIndex === index}
                  onMouseEnter={() => handleAudioPlay(index)}
                  onMouseLeave={() => setAudioIndex(-1)}
                />
              ))}
            </div>
          ) : (
            <NoBirthdays />
          )}
        </div>
      </Container>
      <Footer />
      <Copy />
    </>
  );
};

const BirthdayCard = ({ birthday, audioSrc, isPlaying, onMouseEnter, onMouseLeave }) => (
  <div
    className="cardb"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <audio src={audioSrc} autoPlay={isPlaying} />
    {/* Front of the card */}
    <div className="front">
      <div className="imgset text-center">
        <img
          src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
          alt="birthday"
        />
      </div>
      <p style={{ fontSize: '1.2rem', color: '#fff', marginTop: '10px' }}>
        Happy Birthday!
      </p>
    </div>

    {/* Back of the card */}
    <div className="back">
      <div className="text-container">
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{birthday.name}</p>
        <p style={{ fontSize: '1rem' }}>{birthday.sectionFullName}</p>
        <p>I hope your day is as special as you are!</p>
      </div>
    </div>
  </div>
);

const NoBirthdays = () => (
  <div className="text-container" style={{ textAlign: 'center', margin: '40px' }}>
    <h1>No birthdays today. Check back tomorrow!</h1>
  </div>
);

export default Birthday;

const Container = styled.div`
  overflow: hidden;

  .head-container {
    background-color: #f3e5ab;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cardb {
    position: relative;
    width: 300px;
    height: 425px;
    perspective: 1000px; /* Ensures 3D effect */
    margin: 30px auto;
  }

  .cardb .front,
  .cardb .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hides the back when viewing the front */
    border: 10px solid #9612eb;
    transition: transform 0.8s ease-in-out;
  }

  .cardb .front {
    background-color: #4d4dff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .cardb .front img {
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .cardb .back {
    background-color: #e6f0e6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
  }

  .cardb .back .text-container {
    padding: 20px;
    text-align: center;
  }

  .cardb:hover .front {
    transform: rotateY(180deg);
  }

  .cardb:hover .back {
    transform: rotateY(0deg);
  }
`;
