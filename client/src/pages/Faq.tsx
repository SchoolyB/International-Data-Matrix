import React from 'react'

export default function FAQ() {
  return (
    <>
      <div id='faqContainer'>
        <h1 id='faqMainHeading'>Frequently Asked Questions</h1>
        <div id='faqQuestionContainer'>
          <div id='faq1' className='faqQuestion'>
            <h2 className='faqQuestionHeading'>
              What is the International Data Matrix?
            </h2>
            <p className='faqQuestionParagraph'>
              The International Data Matrix is a resource that anyone can use to
              learn about a country's historical, cultural, religious,
              geographical, geo-economical and geo-political information.
            </p>
          </div>

          <div id='faq2' className='faqQuestion'>
            <h2 className='faqQuestionHeading'>
              What can I do with International Data Matrix do?
            </h2>
            <p className='faqQuestionParagraph'>
              The International Data Matrix has several features that allow
              users gain more knowledge and understanding about a country.
              Currently those features include:
              <ul>
                <li>an interactive map page</li>
                <li>a country selection page</li>
                <li>a translator page</li>
                <li>individual country informational pages</li>
              </ul>
            </p>
          </div>
          <div id='faq3' className='faqQuestion'>
            <h2 className='faqQuestionHeading'>
              Can the translator page translate any language?
            </h2>
            <p className='faqQuestionParagraph'>
              The translator page can translate any language that is supported
              by the DeepL translate API. Currently the DeepL Translate API
              supports the following 27 languages:
              <ul>
                <li>English</li>
                <li>German</li>
                <li>French</li>
                <li>Spanish</li>
                <li>Portuguese</li>
                <li>Italian</li>
                <li>Dutch</li>
                <li>Polish</li>
                <li>Russian</li>
                <li>Bulgarian</li>
                <li>Japanese</li>
                <li>Chinese</li>
                <li>Czech</li>
                <li>Danish</li>
                <li>Estonian</li>
                <li>Finnish</li>
                <li>Greek</li>
                <li>Hungarian</li>
                <li>Lithuanian</li>
                <li>Latvian</li>
                <li>Turkish</li>
                <li>Slovak</li>
                <li>Slovenian</li>
                <li>Swedish</li>
                <li>Estonian</li>
                <li>Ukrainian</li>
                <li>indonesian</li>
              </ul>
            </p>
          </div>

          <div id='faq4' className='faqQuestion'>
            <h2 className='faqQuestionHeading'>
              How do I use the translator page?
            </h2>
            <p className='faqQuestionParagraph'>
              To use the translator page you must first select the language you
              want to translate the language you want to translate to. Then you
              must type the text you want to translate into the left text box.
              Once you have typed the text you want to translate you can click
              the translate button and the translated text will appear in the
              right text box.
            </p>
          </div>
          <div id='faq5' className='faqQuestion'>
            <h2 className='faqQuestionHeading'>
              What is the country selection page?
            </h2>
            <p className='faqQuestionParagraph'>
              The country selection page is a page that allows users to select a
              country and learn more about it. The country selection page
              contains a list of all the countries in the world. Users can
              select a country by clicking on the country's flag and will be
              redirected to the country's informational page.
            </p>
          </div>
          <div id='faq6' className='faqQuestion'>
            <h2 className='faqQuestionHeading'>
              What is the country informational page?
            </h2>
            <p className='faqQuestionParagraph'>
              The country informational page is a page that contains historical,
              cultural, religious, geographical, economical and political
              information about a country.
            </p>
          </div>
          <div id='faq7' className='faqQuestion'>
            <h2 className='faqQuestionHeading'>
              How do I contribute to the International Data Matrix?
            </h2>
            <p className='faqQuestionParagraph'>
              To contribute to the International Data Matrix you can submit a
              start by reading the CONTRIBUTING.md in the International Data
              Matrix GitHub Repository. The International Data Matrix GitHub
              repository can be found by clicking
              <a
                href='https://github.com/SchoolyB/International-Data-Matrix/blob/master/CONTRIBUTING.md'
                target='_blank'
              >
                <i>here</i>
              </a>
              or by clicking the documentation icon in the footer of the
              website.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
