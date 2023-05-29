import React from 'react'
import sad from '../../assets/pageNotFound/sad404.png'
// 404 Error page not found. vite requires file name to be in format [...fileName].tsx
export default function PageNotFound() {
  return (
    <>
      <div id='pageNotFoundContainer'>
        <h1 className='pageNotFound'>404 </h1>
        <div id='pageNotFoundImage'>
          <img id='sad' src={sad} alt='404 page not found' />
        </div>
        <h2 className='pageNotFound'>This Page Could Not Be Found</h2>
        <h2 className='pageNotFound'>Please check the URL and try again</h2>
      </div>
    </>
  )
}
