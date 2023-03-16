import React from 'react'
import './home.css'

function Home() {
  return (
    <>
      <div id='top_container'>
        <div id='landing_page'>
          <p id='intro'><span>Our planet</span> is a beautiful place with a<br/> <span> beautiful Animals.</span></p>
        </div>
      </div>

      <div id='explore_title'>
        <h2>Let's <span>Explore</span> about <br/> <span>Animal Kingdom</span>.</h2>
      </div>


      <div id='big_intro_container'>
        <div className='intro_box'>
          <h2>Diffrent <span>Types</span> <br/>  about <br/> Animals.</h2>
        </div>
         <div className='intro_box'>
          <h2> With Awesome <br/> Animal <br/> <span>Images</span>.</h2>
        </div>
      </div>

      <footer>
        <div className='footer_divs'>
          <h4>Explore</h4><br/>
          <p>Click the <span>Explore</span> button to access our contents.</p>
        </div>
        <div className='footer_divs'>
          <h4>Todo</h4><br/>
          <p>To add your todo's click the <span>Todo List</span> button.</p>
        </div>
        <div className='footer_divs'>
          <h4>About</h4> <br/>
          <p>To become a member <span>Register</span> button is there!</p>
        </div>
      </footer>
    </>
  )
}

export default Home