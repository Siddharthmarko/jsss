import React from 'react'
import Header from '../Layout/Header';
import Header2 from '../Layout/Header2';
import Footer from '../Layout/Footer';
import Copy from '../Layout/Copy';
import FlippingBookEmbed from '../components/FlippingBookEmbed';
import styled from "styled-components";

const SchoolMagazine = () => {

  const containerStyle = {
    position: 'relative',
    paddingTop: 'max(60%, 324px)',
    width: '100%',
    height: '0'
  };
  
  const iframeStyle = {
    position: 'absolute',
    border: 'none',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0'
  };
  return (
    <>
      <Header />
      <Header2 heading="School Magazine" />
      <div >
      </div>
      <div style={containerStyle}>
        <iframe style={iframeStyle} src="https://online.fliphtml5.com/eutma/qgya/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>
      </div>
      <Footer />
      <Copy />
    </>
  )
}

export default SchoolMagazine;
const Container = styled.div``;
