import React from 'react'
import { useEffect, useState } from 'react';
import  Navbar from '../navbar/Navbar';
import { SocialIcon } from 'react-social-icons'
import './Home.css'
import '../navbar/Navbar.css'

function BriefIntro() {

  const text = " Web Developer";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, index));

      if (direction === 1) {
        if (index < text.length) {
          setIndex(index + 1);
        } else {
          setDirection(-1);
        }
      } else {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setDirection(1);
        }
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [index, direction, text]);


  return (
    <div className='bg-color'>
         <Navbar/>
      <div class="container text-center">
     
  <div class="row">
    <div class="col text-start">
    <p>Muhammad Hamza Ali</p>
    <h1>HAY! I’M Hamza</h1>
    <h2>I'm a {displayText}</h2>
      <p> Motivated and detail-oriented aspiring Front-End Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap and React. Skilled in creating responsive, user-friendly web applications. Eager to contribute to dynamic teams, bringing strong problem-solving abilities and a commitment to continuous learning.</p>
      <div class="row">
    <div class="col text-start">
      <button>Get In Touch</button>
  </div>
    <div class="col">
    <SocialIcon url="www.vimeo.com" />
<SocialIcon url="www.meetup.com" />
<SocialIcon url="www.pinterest.com" />
    </div>
  </div>
    
    </div>
    <div class="col">
         <img src='https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg' alt='img-1'/>
    </div>
  </div>


</div>
    </div>
  )
}

export default BriefIntro
