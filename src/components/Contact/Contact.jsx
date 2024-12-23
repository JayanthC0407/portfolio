import React from 'react'
import con from '../../assets/contact.png'
import './Contact.css'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(()=>{
    gsap.from(".leftcontact img",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact img",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      } 
    })
    gsap.from("form",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"form",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      } 
    })
  })
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/xbllrebe" method='POST'>
                <input name='username' type="text" placeholder='Name'/>
                <input type="email" name="Email" placeholder='Email'/>
                <textarea name="message" id="textarea" placeholder='message me'></textarea>
                <input type="submit" id="btn" />
            </form>
        </div>
    </div>
  )
}

export default Contact
