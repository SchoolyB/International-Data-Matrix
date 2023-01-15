import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import Contact  from "./pages/Contact"
import  Translator  from "./pages/Translator"
// import  Australia  from "./pages/Australia"
// import  Belarus  from "./pages/Belarus"
// import  Greece  from "./pages/Greece"
// import  Japan  from "./pages/Japan"
// import  Nepal  from "./pages/Nepal"
// import  Morocco  from "./pages/Morocco"
// import  Sudan  from "./pages/Sudan"
// import  Usa  from "./pages/Usa"
// import  Venezuela  from "./pages/Venezuela"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/Translator' element={<Translator />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Countries' element={<Countries />} />
        {/* <Route path='/serverAustralia' element={<Australia />} />
        <Route path='/Belarus' element={<Belarus />} />
        <Route path='/Greece' element={<Greece />} />
        <Route path='/Japan' element={<Japan />} />
        <Route path='/Nepal' element={<Nepal />} />
        <Route path='/Morocco' element={<Morocco />} />
        <Route path='/Sudan' element={<Sudan />} />
        <Route path='/Usa' element={<Usa />} />
        <Route path='/Venezuela' element={<Venezuela />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
