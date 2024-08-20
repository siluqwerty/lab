import React from 'react'
import uptec from './uptec.png';


export default function Header() {
  return (
    <div>
      <div className="head1">
        <div className="container-logo">
          <img className="upteclogo" src={uptec} alt='daya! kuch gadbad hai' />
        </div>
      </div>
      <p align="center"> KANPUR</p>
      <div className="head2">
        <h2 align="center">LAB MANAGEMENT SYSTEM</h2>
      </div>
    </div>
  )
}
