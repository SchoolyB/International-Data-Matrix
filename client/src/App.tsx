import {BrowserRouter as Router,useRoutes,} from 'react-router-dom'
import Header from './components/Header'
import routes from '~react-pages'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
      {useRoutes(routes)}
    <Footer/>
    </>
  )
}

export default App
