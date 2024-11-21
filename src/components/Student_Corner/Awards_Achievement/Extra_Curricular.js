import React from "react";
import styled from "styled-components";

function Extra_Curricular() {
    const cardData = [
        {
          id: 1,
          title: "Revolting Children Play",
          description:
            "In 2024, at the annual theater festival, the team of Doaguru Senior performed a play titled 'Revolting Children'. The energetic and lively performance, inspired by the popular musical, showcased our students' talent and creativity, earning high praise and recognition.",
       
          
          videoUrl: "https://www.youtube.com/embed/PSyedQl9IiQ?si=yEkYg3KKTrjf3-Gx&amp;controls=0&amp;start=17",
        },
        {
          id: 2,
          title: "This Is A Test",
          description:
            "In 2024, at the Annual Drama Festival, the team of Doaguru Senior performed a play titled 'This Is A Test'. Inspired by a popular narrative, it was a State Level Competition in which Doaguru achieved notable recognition.",
        
    
          videoUrl: "https://www.youtube.com/embed/PtfawPj80YU?si=o3LSHjM__xybWOLq&amp;controls=0&amp;start=17",
        },
        {
          id: 3,
          title: "English Play – King Lear || 9th Annual Day Celebration ‘Cynosure’ – The Celebration of Excellence.",
          description:
            "In 2010, at King Lear, the National winning team of Doaguru, 2008 was invited by the organizers of English PLay.",
      
    
          videoUrl: "https://www.youtube.com/embed/XxSes4YSYHU?si=maaKPTk-er2yX_MQ&amp;controls=0&amp;start=17",
        },
        // {
        //   id: 4,
        //   title: "Rai Dance 2009",
        //   description:
        //     "In 2009 Indira Gandhi Rashtriya Manav Vikas Sangralaya -Bhopal invited the Balrang winning team of Joy Senior. The event was Yuva Sadbhavna Sammellan and the team performed in the presence of H.E. Governor of M.P. Mr. Rameshwar Thakur.",
          
            
        //   videoUrl: "https://www.youtube.com/embed/R6ZRJd4xjXA?si=cRYMobDguv-xFwCJ",
        // },
        // {
        //   id: 5,
        //   title: "Balrang 2008 in school campus",
        //   description:
        //     "In 2008 Balrang National Competition-The credit of bringing the traditional Rai Dance in an artistic manner on the stage goes to Joy Senior Secondary School Jabalpur. Joy secured the first position in the Dance Competition at National Level by defeating 15 teams from all over India.",
        //     year: 2013,
    
        //   videoUrl: "https://www.youtube.com/embed/RXOCXB3DKlU",
        // },
       
        // Add more card objects as needed
      ];
  return (
    <>
    
     <Wrapper>
      <div className="container-fluid" style={{ backgroundColor: "#f7f7f7", width:"100vw" }}>
        <div className="container text-center">
          <h1 className="text-center p-3 p-sm-3" style={{ color: "#7d38c6" }}>
          Extra Curricular
          </h1>
          <div
            className="underline mx-auto"
            style={{
              height: 3,
              width: "4rem",
              backgroundColor: "#34495E",
              marginTop: 20,
              marginBottom: 30,
            }}
          ></div>
        </div>
        <div className="container mb-3">
              <div className="row mt-3">
          {cardData.map((card) => (
            <div key={card.id} className="col-lg-4 mt-2">
              <div className="card shadow p-3 mb-5 bg-white rounded-4" >
               
              
                  <div className="ratio ratio-16x9">
                    <iframe
                      width="560"
                      height="315"
                      src={card.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
            
                <div className="card-body">
                  <h5 className="card-title mt-2">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))
          }
        </div>  
        </div>
    
      </div>
    </Wrapper>
    </>
   
  );
}

export default Extra_Curricular;
const Wrapper = styled.div`
  .card {
    width: 85%;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .form-control {
    width: 25%;
  
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .form-select{
    width: 10%;
    
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  @media (min-width: 430px){
 }

@media (min-width: 576px){
 }

@media (min-width: 768px){

 .card {
  /* height: 500px; */
 }

 }

@media (min-width: 992px){


}

@media (min-width: 1200px){

}
 @media (min-width: 1400px){
 }
`;
