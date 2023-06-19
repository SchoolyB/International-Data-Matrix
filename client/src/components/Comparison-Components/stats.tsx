import React from 'react'

export default function Stats() {
  return (
    <>
      {/* start of "population" */}
      <div className='statContainer'>
        <div className='populationContainer stat'>
          <div className='leftSidePopulationContainer'>
            <textarea
              className='leftPopulationTextArea comparisonTextArea'
              readOnly
              placeholder='Left population'
            />
          </div>
          <h3 className='statHeading'>Population</h3>
          <div className='rightSidePopulationContainer '>
            <textarea
              className='rightPopulationTextArea comparisonTextArea'
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
              className='leftNumOfTimezonesTextArea comparisonTextArea'
              readOnly
              placeholder='Left Number of Timezones'
            />
          </div>
          <h3 className='statHeading'>Number of Time zones</h3>
          <div className='rightSideNumOfTimezonesContainer '>
            <textarea
              className='rightNumOfTimezonesTextArea comparisonTextArea'
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
              className='leftTimezonesTextArea comparisonTextArea'
              readOnly
              placeholder='Left Timezones'
            />
          </div>
          <h3 className='statHeading'>Time zones</h3>
          <div className='rightSideTimezonesContainer '>
            <textarea
              className='rightTimezonesTextArea comparisonTextArea'
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
              className='leftAreaTextArea comparisonTextArea'
              readOnly
              placeholder='Left Area'
            />
          </div>
          <h3 className='statHeading'>Area</h3>
          <div className='rightSideAreaContainer '>
            <textarea
              className='rightAreaTextArea comparisonTextArea'
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
              className='leftYearFoundedTextArea comparisonTextArea'
              readOnly
              placeholder='Left Year Founded'
            />
          </div>
          <h3 className='statHeading'>Year Founded</h3>
          <div className='rightSideYearFoundedContainer '>
            <textarea
              className='rightYearFoundedTextArea comparisonTextArea'
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
              className='leftYearOfIndependenceTextArea comparisonTextArea'
              readOnly
              placeholder='Left Year of Independence'
            />
          </div>
          <h3 className='statHeading'>Year of Independence</h3>
          <div className='rightSideYearOfIndependenceContainer '>
            <textarea
              className='rightYearOfIndependenceTextArea comparisonTextArea'
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
              className='leftGovernmentTypeTextArea comparisonTextArea'
              readOnly
              placeholder='Left Government Type'
            />
          </div>
          <h3 className='statHeading'>Government Type</h3>
          <div className='rightSideGovernmentTypeContainer '>
            <textarea
              className='rightGovernmentTypeTextArea comparisonTextArea'
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
