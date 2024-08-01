import React from 'react'
import './Side.css'
import { SideData } from './SideData.js'
function SideBar() {
  return (
    <div className='Sidebar'>
      <ul className='SideBarList'>
        {SideData.map((val, key) =>{
          return(
            <li key = {key} className='row'>
              <div id = 'icon'>{val.icon}</div>
              <div id = 'title'>{val.title}</div>
            </li>

          ) 
          
        })}
      </ul>
    </div>
  )
}

export default SideBar