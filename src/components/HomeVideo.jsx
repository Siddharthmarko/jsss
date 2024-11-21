// import React from "react";
// import styled from "styled-components";
// import { FaSearch } from "react-icons/fa";
// import video from "../all imgs/home/ec61fe4d-99e2-4e93-982b-42870ebb642f.webm";

// const HomeVideo = () => {
//   return (
//     <>
//       <Container>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div className="logo">
//                   <img
//                     src="https://res.cloudinary.com/antrix/image/upload/v1690366105/jsslogo-png_neij4r.png"
//                     alt="logo"
//                     className="img-fluid"
//                   />
//                 </div>
//                 <div className="serach">
//                 <div class="d-flex form-inputs relat">
//                   <FaSearch className="absol" />
//                   <input class="form-control" type="text" placeholder="" style={{height:"23px", border:"none", borderBottom:"1px solid black"}}/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="videosect">
//             <video className="video" src={video} autoPlay muted loop></video>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default HomeVideo;
// const Container = styled.div`
// margin: 0;
// padding: 0;
// .logo{
//     width: 250px;
//     height: 250px;
// };
// .serach{
//     display: flex;
//     flex-direction: column-reverse;
//     justify-content: center;
//     @media screen and (min-width: 280px) and (max-width: 1024px) {
//         display: hidden;
//     }
// };
// .relat {
//     position: relative;
//   }
// .absol{
//     font-size: 20px;
//     margin: 3px;
// }
// .row{
//     position: absolute;
//     display: flex;
//     justify-content: space-evenly;
//     z-index: 9;
// }
// .videosect{
//     position: relative;
//     width: 100%;
//     height: 100%;
//     /* @media screen and (min-width: 280px) and (max-width: 480px) {
//         width: 100%;
//     } */
// }
// .video{
//     width: 100%;
//       height: 100%;
//       object-fit: cover;
//     @media screen and (min-width: 280px) and (max-width: 480px) {
//         width: auto;
//         height: auto;
//         object-fit: cover;
//     }
// }
// `;
