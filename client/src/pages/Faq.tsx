import React from 'react'
import home from '../../assets/footerIcons/home.png'
import contact from '../../assets/footerIcons/contact.png'
import documentation from '../../assets/footerIcons/documentation.png'
import translator from '../../assets/footerIcons/translate.png'
import map from '../../assets/footerIcons/map.png'
import faq from '../../assets/footerIcons/faq.png'

export default function FAQ() {
  return (
    <>
      <div id='faqContainer'>
        <h1 id='faqMainHeading'>Frequently Asked Questions</h1>
        <div className='faqRowContainer'>
          {/* start of FAQ top row */}

          <div id='faqTopRow' className='faqRow'>
            {/* 1st FAQ */}
            <div id='faq1' className='faqQuestion'>
              <h3 className='faqQuestionHeading'>
                What Is The International Data Matrix?
              </h3>
              <p className='faqQuestionParagraph'>
                The International Data Matrix is a resource that anyone can use
                to learn about a country's historical, cultural, religious,
                geographical, geo-economical and geo-political information.
              </p>
            </div>
            {/* 2nd FAQ */}
            <div id='faq2' className='faqQuestion'>
              <h3 className='faqQuestionHeading'>
                What Can The International Data Matrix Do?
              </h3>
              <p className='faqQuestionParagraph'>
                The International Data Matrix has several features that allow
                users to gain more knowledge and understanding about a country.
                Currently those features include:
                <br />
                <br />
                <ul>
                  <li>an interactive map</li>
                  <li>a translator</li>
                  <li>country informational pages</li>
                </ul>
              </p>
            </div>
            {/* 3rd FAQ */}
            <div id='faq3' className='faqQuestion'>
              <h3 className='faqQuestionHeading'>
                How Many Languages Does The Translator Have?
              </h3>
              <p className='faqQuestionParagraph'>
                The translator can translate any language that is supported by
                the DeepL translate API. Currently the DeepL Translate API
                supports 27 languages
              </p>
            </div>
          </div>

          {/* start FAQ bottom row */}

          <div id='faqBottomRow' className='faqRow'>
            {/* 4th FAQ */}
            <div id='faq4' className='faqQuestion'>
              <h3 className='faqQuestionHeading'>
                What Is The Country Selection page?
              </h3>
              <p className='faqQuestionParagraph'>
                The country selection page is a page that allows users to select
                a country and learn more about it. The country selection page
                contains a list of all the countries in the world. Users can
                select a country by clicking on the country's flag and will be
                redirected to the country's informational page.
              </p>
            </div>
            {/* 5th FAQ */}
            <div id='faq5' className='faqQuestion'>
              <h3 className='faqQuestionHeading'>
                What Is The Country Informational Page?
              </h3>
              <p className='faqQuestionParagraph'>
                The country informational page is a page that contains
                historical, cultural, religious, geographical, economical and
                political information about a country.
              </p>
            </div>
            {/* 6th FAQ */}
            <div id='faq6' className='faqQuestion'>
              <h3 className='faqQuestionHeading'>How Can I Contribute?</h3>
              <p className='faqQuestionParagraph'>
                To contribute to the International Data Matrix you can start by
                reading the CONTRIBUTING.md in the International Data Matrix
                GitHub Repository. This document can be found by clicking
                <a
                  href='https://github.com/SchoolyB/International-Data-Matrix/blob/master/CONTRIBUTING.md'
                  target='_blank'
                >
                  <i> here </i>
                </a>
                or by clicking the documentation icon in the footer of the
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        {/* author name */}
        <ul id='webPageInfo'>
          <li>Author: Marshall Burns</li>
        </ul>
        {/*footer icons*/}

        <ul id='footerIconContainer'>
          {/* home icon */}
          <li>
            <a title='Home' href='/'>
              <img
                title='Home'
                className='footerIcon'
                id='homeIcon'
                src={home}
              />
            </a>
          </li>

          {/* translator icon */}
          <li>
            <a title='Translator' href='Translator'>
              <img
                title='Translator'
                className='footerIcon'
                id='translateIcon'
                src={translator}
              />
            </a>
          </li>

          {/* contact icon */}
          <li id='footerContactIcon'>
            <a title='Contact' href='Contact'>
              <img
                title='Contact'
                className='footerIcon'
                id='ContactIcon'
                src={contact}
              />
            </a>
          </li>
          {/* map icon */}
          <li>
            <a title='Map' href='Map'>
              <img title='Map' className='footerIcon' id='MapIcon' src={map} />
            </a>
          </li>
          {/* faq icon */}
          <li>
            <a title='FAQ' href='FAQ'>
              <img title='FAQ' className='footerIcon' id='FAQIcon' src={faq} />
            </a>
          </li>

          {/* documentation icon */}
          <li>
            <a
              title='Documentation'
              href='https://github.com/SchoolyB/Capstone/blob/master/README.md'
            >
              <img
                title='Documentation'
                className='footerIcon'
                id='docIcon'
                src={documentation}
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}
