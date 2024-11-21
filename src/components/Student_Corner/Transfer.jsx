import React from 'react'
import styled from 'styled-components'
import Header from '../../Layout/Header'
import Header2 from '../../Layout/Header2'
import Footer from '../../Layout/Footer'
import { Link } from 'react-router-dom'
import Copy from '../../Layout/Copy'

const Transfer = () => {
  return (
    <>
     <Header/>
     <Header2 heading="Download Certificate"/>
      <Container>
        <> 
        <div className='container-fluid'>
           <div className='Container ms-lg-5 '>
            <div className='row'>
              <div className='col-lg-3 mt-3 col-sm-6 mt-sm-5 ms-md-4 mx-1'>
                {/* <a href="/"><button type="button" class="btn button btn-warning btn-outline-light w-50 p-2">Home</button></a> */}
              </div>
            </div>
          </div> 

          <div className='Container mt-5 pb-5 mx-1'>
            <div className='row'>

              <div className='col-lg-3 col-md-3 col-sm-1 '></div>

               <div className='col-lg-6 col-md-7 col-sm-10 mt-5'>
                <div class="card rounded-3 text-black d-flex justify-content-center align-items-center">
                  <div>
                <h5 className='Certificate'>Transfer Certificate</h5>
                  </div>
                  <br />
                  <div>
                    <a href="/transfer-certificate">
                  <button type="button" class="button">Download Transfer Certificate</button>
                    </a>
                  </div>
                  <br/>
                  <div>
                    <a href="/character-certificate">
                    <button type="button" className="button">Download Character Certificate</button>
                    </a>
                  </div>
                  
                </div>

              </div>

              <div className='col-lg-3 col-md-1 col-sm-1'></div>
            </div>
          </div>    
          </div> 
        </>
      </Container>
      <Footer/>
      <Copy/>
    </>
  )
}

export default Transfer

const Container = styled.div`

/* background-color:#4d7db7;  */
height: 70vh;
;
*{
  margin:0;
  padding:0;
  border:border-box;  
}

.button{
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius:0px 15px 0px 15px;
  &:hover{
    background-color: yellowgreen;
    color: black;
  }
}
.card{
  height: 120%;
    width: 85%;
    margin: 0.5%;
    padding: 3rem;
    border: none;
    border-color: transparent;
    box-shadow: 0px 0px 25px -3px rgba(0,0,0,0.1);
    @media screen and (max-width: 768px) {
      height: 100%;
      width: 100%;
      margin: 0%;
    }
}
#btn{
  &hover{
    background-color: yellow;
  }
}
`;