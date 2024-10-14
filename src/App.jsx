/* eslint-disable react/prop-types */
import './App.css'



function App() {

  return (
    <>
      <div className='mx-auto'>
        <div className='mb-4'>

        </div>
        <div>
          <button onClick={setRandomCountry}>Random Country</button>
        </div>
        <div>
          <input type='text' onChange={setCountryEvent} />
        </div>
      </div>
    </>
  )
}

export default App
