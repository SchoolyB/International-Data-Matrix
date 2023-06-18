import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import mapIcon from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'
import React from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <div className='overallContactContainer'>
        <div id='contactContainer'>
          <h1>Contact Me</h1>
          <form action='https://formspree.io/f/mknelldn' method='POST'>
            <label className='contactLabel' id='contactName'>
              <input
                className='contactInput'
                type='text'
                name='name'
                placeholder='Enter your name'
              ></input>
            </label>
            <label className='contactLabel' id='contactEmail'>
              <input
                className='contactInput'
                type='email'
                name='email'
                placeholder='Enter your email'
              />
            </label>
            <label className='contactLabel' id='contactMsg'>
              <textarea
                id='contactTextArea'
                rows={16}
                cols={35}
                name='message'
                placeholder='Enter your message'
              ></textarea>
            </label>
            <button
              title='Submit'
              role='button'
              id='contactSubmitBtn'
              type='submit'
            ></button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
