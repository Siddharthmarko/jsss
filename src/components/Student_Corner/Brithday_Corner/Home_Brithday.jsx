import React from 'react'
import styled from 'styled-components'
import Video from './Video'
import Header from '../../../Layout/Header'
import BirthdayCard from './BirthdayCard';


function Home_Brithday() {
  return (
    <>
    <div style={{overflowX:"hidden"}}>
   <Header/>
    <Video/>
   
    <BirthdayCard/>
    </div>
    </>
  )
}

export default Home_Brithday
const Wrapper = styled.div`
   



`