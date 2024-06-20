import React from 'react'
import BriefIntro from './BriefIntro'
import Tags from './Tags'
import About from '../about/About'
import Services from '../services/Services'
import SlideShow from '../slide-show/SlideShow'


function Home() {

  // const url = "https://internship-management-app.000webhostapp.com/api/auth/register";
  // const regData = {
  //   name: "Hamza and Usman",
  //   email: "hamzaa@gmail.com",
  //   password: "asasasas!",
  //   role_id: 1
  // };

  //   useEffect(() => {
  //     fetch(url,{
  //       method:'POST',
  //       header:{
  //         'Content-Type': 'application/json',
  //         'Accept':'application/json',
  //       },
  //       body: JSON.stringify(regData),
  //      }).then(resp =>{
  //       if (!resp.ok) {
  //             throw new Error(`Network response was not ok: ${resp.statusText}`);
  //           }
  //           return resp.json();
  //      }).then(data =>{
  //           console.log(data);
  //      }).catch(error => {
  //         console.error('Error posting data:', error);
  //       })
  //   },[]);

  return (
    <div>
      <BriefIntro/>
      <Tags/>
      <About/>
      <SlideShow/>
      <Services/>

      


      
    </div>
  )
}

export default Home
