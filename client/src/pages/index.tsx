import axios from 'axios'
import Container from '../components/helpers/Container'

export default function Home() {
  return (
    <Container>
      <div id='welcomeContainer'>
        <h1 id='welcomeMainHeading'>The Entire World All In One Place</h1>
        <p id='welcomeParagraph'>
          The International Data Matrix is a resource that anyone can use to
          learn about a country's historical, cultural, religious, geographical,
          geo-economical and geo-political information.
        </p>

        <p id='welcomeParagraph'>
          To learn more about a country you can click on the button below or
          click on "Country Selection" in the nav menu above.
        </p>
        <div id='welcomeBtnContainer'>
          <a href='Countries' role='button' id='welcomeBtn'>
            View Countries
          </a>
        </div>
      </div>
    </Container>
  )
}
