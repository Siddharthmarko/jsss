import React from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import RouterMain from "../RouterMain";

const CertificatePhoto = () => {
  const { id } = useParams();

  const downloadBirthCertificate = async () => {
    try {
      const response = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/getStudentBirthCertificateviaId/${id}`,
        {
          responseType: "arraybuffer",
        }
      );

      const contentType = response.headers["content-type"];
      const supportedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      if (supportedTypes.includes(contentType)) {
        const file = new File([response.data], "certificate", {
          type: contentType,
        });

        const url = URL.createObjectURL(file);

        // Open the URL in a new tab
        window.open(url, "_blank");
      } else {
        console.log("Unsupported file type");
      }
    } catch (error) {
      console.error("Error downloading certificate:", error.message);
      // Handle the error appropriately, e.g., show a user-friendly message
    }
  };

  const downloadStudentPhoto = async () => {
    try {
      const response = await axios.get(
        `https://joyseniorsecondary.ac.in/api/auth/getStudentPhotoviaId/${id}`,
        {
          responseType: "arraybuffer",
        }
      );

      const contentType = response.headers["content-type"];
      const supportedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      if (supportedTypes.includes(contentType)) {
        const file = new File([response.data], "certificate", {
          type: contentType,
        });

        const url = URL.createObjectURL(file);

        // Open the URL in a new tab
        window.open(url, "_blank");
      } else {
        console.log("Unsupported file type");
      }
    } catch (error) {
      console.error("Error downloading certificate:", error.message);
      // Handle the error appropriately, e.g., show a user-friendly message
    }
  };

  const downloadFatherPhoto = async () => {
    try {
      const response = await axios.get(
        `https://joyseniorsecondary.ac.in/api/auth/getFatherPhotoviaId/${id}`,
        {
          responseType: "arraybuffer",
        }
      );

      const contentType = response.headers["content-type"];
      const supportedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      if (supportedTypes.includes(contentType)) {
        const file = new File([response.data], "certificate", {
          type: contentType,
        });

        const url = URL.createObjectURL(file);

        // Open the URL in a new tab
        window.open(url, "_blank");
      } else {
        console.log("Unsupported file type");
      }
    } catch (error) {
      console.error("Error downloading certificate:", error.message);
      // Handle the error appropriately, e.g., show a user-friendly message
    }
  };

  const downloadMotherPhoto = async () => {
    try {
      const response = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/getMotherPhotoviaId/${id}`,
        {
          responseType: "arraybuffer",
        }
      );

      const contentType = response.headers["content-type"];
      const supportedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      if (supportedTypes.includes(contentType)) {
        const file = new File([response.data], "certificate", {
          type: contentType,
        });

        const url = URL.createObjectURL(file);

        // Open the URL in a new tab
        window.open(url, "_blank");
      } else {
        console.log("Unsupported file type");
      }
    } catch (error) {
      console.error("Error downloading certificate:", error.message);
      // Handle the error appropriately, e.g., show a user-friendly message
    }
  };

  return (
    <>
      <RouterMain />
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-evenly align-items-center mt-5">
                <button
                  className="btn btn-success"
                  onClick={downloadBirthCertificate}
                >
                  Birth Certificate
                </button>
                <button className="btn btn-info" onClick={downloadStudentPhoto}>
                  Student Photo
                </button>
                <button
                  className="btn btn-warning"
                  onClick={downloadFatherPhoto}
                >
                  Father Photo
                </button>
                <button className="btn btn-dark" onClick={downloadMotherPhoto}>
                  Mother Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CertificatePhoto;

const Container = styled.div``;

// import React from "react";
// import { styled } from "styled-components";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const CertificatePhoto = () => {
//   const { id } = useParams();
//   console.log(id);

//   const downloadBirthCertificate = async () => {
//     console.log(id);
//     try {
//       const response = await axios.get(
//         `https://www.joyseniorsecondary.ac.in/api/auth/getStudentBirthCertificateviaId/${id}`,
//         {
//           responseType: "arraybuffer", // Request binary data as an ArrayBuffer
//         }
//       );

//       // Get the Content-Type header from the response
//       const contentType = response.headers["content-type"];

//       // Check if the Content-Type indicates it's a PDF, JPG, JPEG, or PNG
//       if (
//         contentType === "application/pdf" ||
//         contentType === "image/jpeg" ||
//         contentType === "image/jpg" ||
//         contentType === "image/png"
//       ) {
//         // Create a new Blob from the response data
//         const file = new File([response.data], "certificate", {
//           type: contentType,
//         });

//         // Create a data URL for the file
//         const url = URL.createObjectURL(file);

//         // Open the URL in a new tab
//         window.open(url, "_blank");
//       } else {
//         console.log("Unsupported file type");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <Container>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <button
//                 className="btn btn-success"
//                 onClick={downloadBirthCertificate}
//               >
//                 Download Birth Certificate
//               </button>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default CertificatePhoto;
// const Container = styled.div``;
