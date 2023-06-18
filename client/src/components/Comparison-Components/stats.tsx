import React from 'react'

export default function stats() {
  return (
    <>
      {/* start of "population" */}
      <div className='statContainer'>
        <div className='populationContainer stat'>
          <div className='leftSidePopulationContainer'>
            <textarea
              className='leftPopulationTextArea'
              readOnly
              placeholder='Left population'
            />
          </div>
          <h3 className='statHeading'>Population</h3>
          <div className='rightSidePopulationContainer '>
            <textarea
              className='rightPopulationTextArea'
              readOnly
              placeholder='Right population'
            />
          </div>
        </div>
        <hr />
      </div>
      {/* end of population */}

      {/*  start of "number of timezones"*/}
      <div className='statContainer'>
        <div className='numOfTimezonesContainer stat'>
          <div className='leftSideNumOfTimezonesContainer'>
            <textarea
              className='leftNumOfTimezonesTextArea'
              readOnly
              placeholder='Left Number of Timezones'
            />
          </div>
          <h3 className='statHeading'>Number of Time zones</h3>
          <div className='rightSideNumOfTimezonesContainer '>
            <textarea
              className='rightNumOfTimezonesTextArea'
              readOnly
              placeholder='Right Number of Timezones'
            />
          </div>
        </div>
        <hr />
      </div>
      {/* end of number of timezones */}

      {/*  start of "timezones" */}
      <div className='statContainer'>
        <div className='timezonesContainer stat'>
          <div className='leftTimezonesContainer'>
            <textarea
              className='leftTimezonesTextArea'
              readOnly
              placeholder='Left Timezones'
            />
          </div>
          <h3 className='statHeading'>Time zones</h3>
          <div className='rightSideTimezonesContainer '>
            <textarea
              className='rightTimezonesTextArea'
              readOnly
              placeholder='Right Timezones'
            />
          </div>
        </div>
        <hr />
      </div>
      {/* end of timezones */}

      {/*  start of "area"*/}
      <div className='statContainer'>
        <div className='areaContainer stat'>
          <div className='leftSideAreaContainer'>
            <textarea
              className='leftAreaTextArea'
              readOnly
              placeholder='Left Area'
            />
          </div>
          <h3 className='statHeading'>Area</h3>
          <div className='rightSideAreaContainer '>
            <textarea
              className='rightAreaTextArea'
              readOnly
              placeholder='Right Area'
            />
          </div>
        </div>
        <hr />
      </div>
      {/* end of number of area */}

      {/*  start of "year founded" */}
      <div className='statContainer'>
        <div className='yearFoundedContainer stat'>
          <div className='leftSideYearFoundedContainer'>
            <textarea
              className='leftYearFoundedTextArea'
              readOnly
              placeholder='Left Year Founded'
            />
          </div>
          <h3 className='statHeading'>Year Founded</h3>
          <div className='rightSideYearFoundedContainer '>
            <textarea
              className='rightYearFoundedTextArea'
              readOnly
              placeholder='Right Year Founded'
            />
          </div>
        </div>
        <hr />
      </div>
      {/* end of year founded */}

      {/* start of year of independence */}
      <div className='statContainer'>
        <div className='yearOfIndependenceContainer stat'>
          <div className='leftSideYearOfIndependenceContainer'>
            <textarea
              className='leftYearOfIndependenceTextArea'
              readOnly
              placeholder='Left Year of Independence'
            />
          </div>
          <h3 className='statHeading'>Year of Independence</h3>
          <div className='rightSideYearOfIndependenceContainer '>
            <textarea
              className='rightYearOfIndependenceTextArea'
              readOnly
              placeholder='Right Year of Independence'
            />
          </div>
        </div>
        <hr />
      </div>
      {/* end of year of independence */}

      {/* start of year of government type */}
      <div className='statContainer'>
        <div className='governmentTypeContainer stat'>
          <div className='leftSideGovernmentTypeContainer'>
            <textarea
              className='leftGovernmentTypeTextArea'
              readOnly
              placeholder='Left Government Type'
            />
          </div>
          <h3 className='statHeading'>Government Type</h3>
          <div className='rightSideGovernmentTypeContainer '>
            <textarea
              className='rightGovernmentTypeTextArea'
              readOnly
              placeholder='Right Government Type'
            />
          </div>
        </div>
        <hr />
      </div>
      {/* end of government type */}
      {/* todo: add more stats */}
      {/* end of stats */}
    </>
  )
}
