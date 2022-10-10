import React from 'react'
import './animals.css'

function Animals() {
  return (
    <section id='animal_window_container'>
      <div id='animals_title'>
        <h4>Scroll to the right to see more Images</h4>
      </div>
      <div id='animals_main_window'>
        <div id='animals_image_container'>
          <div className='animal_div' id='box_1'></div>
          <div className='animal_div' id='box_2'></div>
          <div className='animal_div' id='box_3'></div>
          <div className='animal_div' id='box_4'></div>
          <div className='animal_div' id='box_5'></div>
          <div className='animal_div' id='box_6'></div>
        </div>
      </div>
      
    </section>
  )
}

export default Animals