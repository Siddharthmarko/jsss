import React from 'react'
import Header from "../Layout/Header";
import Header2 from "../Layout/Header2";
import styled from "styled-components";
import Footer from "../Layout/Footer";
import Copy from "../Layout/Copy";
import { BsSendFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";



const Contactus = () => {
    return (
        <>
            <Header />
            <StyledDiv>
                <Header2 heading="Contact US" />

                <div className='container-fluid'>

                    <div className='contactform d-flex flex-md-row flex-lg-row flex-md-column-reverse flex-column-reverse  justify-content-md-between p-4 mt-4 row'>
                        <div className='contact-side col-lg-5'>
                            <h1 className='text-center'>Contact Us</h1>
                            <div className='d-flex line m-2 mt-4 '>
                                <BsSendFill className='icon mt-2 fs-5' />
                                <p className='para mx-3 text-start'><span className='fw-bold'>Address : </span>290 Washington St,
                                     <br /> Somerville Ave suite 327,6/18 block Cambridge, MA 02139, United States</p>
                            </div>
                            <div className='line d-flex m-2 mt-4'>
                                <BsTelephoneFill className='icon mt-2 fs-5' />
                                <p className='para mx-3 '><span className='fw-bold'>Telephone No : </span> + 91 999665544, 45555883</p>
                            </div>
                            <div className='line d-flex m-2 mt-4'>
                                <BsTelephoneFill className='icon mt-2 fs-5' />
                                <p className='para mx-3 '><span className='fw-bold'>Tollfree No : </span> + 91 1235243132</p>
                            </div>
                            <div className='line d-flex m-2 mt-4'>
                                <MdEmail className='icon mt-2 fs-4' />
                                <p className='para mx-3 '><span className='fw-bold'> Email : </span>doaguruschool@gmail.com</p>
                            </div>


                        </div>


                        <div className='message-side col-lg-7'>

                            <h1 className='text-center'>Send us a Message</h1>
                            <p className='dialog mt-4'>We’d love to hear your thoughts and feedback!</p>

                            <form>
                                <div class="form-row">
                                    <div class=" col-md-6">
                                        <label for="inputtext4"></label>
                                        <input type="text" class="form-control fs-5" id="inputtext4" placeholder="First Name" />
                                    </div>
                                    <div class=" col-md-6">
                                        <label for="inputtext4"></label>
                                        <input type="text" class="form-control fs-5" id="inputtext4" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div class="">
                                    <label for="inputEmail4"></label>
                                    <input type="email" class="form-control fs-5" id="inputEmail4" placeholder="Enter Your Email Address" />
                                </div>
                                <div class="">
                                    <label for="inputmobile2"></label>
                                    <input type="tel" class="form-control fs-5" id="inputMobile2" placeholder="Enter Mobile Number" />
                                </div>
                                <div class="">
                                    <label for="inputMessage2"></label>
                                    <input type="text" class="form-control fs-5" id="inputMessage2" placeholder="Enter Your Message" />
                                </div>
                                <button type="button" class="submit-btn px-4 mt-3 rounded">Submit</button>
                            </form>


                        </div>
                    </div>

                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5894.796683389925!2d-71.09555757336504!3d42.37665997295438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377357d48c1b9%3A0xb0f8b0a63ee4ac64!2sAlbert%20F.%20Argenziano%20School!5e0!3m2!1sen!2sin!4v1732175030075!5m2!1sen!2sin"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
                <Footer />
            </StyledDiv>
            <Copy />
        </>
    )
}

export default Contactus;
const StyledDiv = styled.div`

input::placeholder {
    color: gray;
    font-size: 16px;
}

h1 {
    color: #7d38c6;
}

.map {
  margin: 20px auto;
}

iframe {
}

.map iframe {
    width: 100%;
    max-width: 100vw;
    height: 450px;
    border: 0;
    padding: 0px 20px;
    text-align: center;
}

.dialog {
    font-size: 1.25rem;
}

.message-side {
    margin-bottom: 40px;
}

.para {
    font-size: 15px;
}

/* .icon, .para {
    margin: auto;
} */

    /* .line {
        width: 100%;
    } */


.submit-btn {
    background-color: #7d38c6;
    color: white;
}


@media (min-width: 430px){

}

@media (min-width: 576px){

}

@media (min-width: 768px){

    .para {
    font-size: 18px;
}

}

@media (min-width: 992px){

    input::placeholder {
    font-size: 20px;
}

.para {
    font-size: 20px;
}

.dialog {
    font-size: 1.50rem;
}


}

@media (min-width: 1200px){

}

@media (min-width: 1400px){

}

`;