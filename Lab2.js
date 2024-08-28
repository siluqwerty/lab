import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function Lab2() {
  const navigate = useNavigate();
  const pc = () => {
    navigate('/pc');
  }
  return (

    <div>
      <Header />
      <center><h1>Lab no. 2</h1></center>
      <table className='tab'>

        <tr>
          <td className='cell'><button className='btn' onClick={pc}></button> </td>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell gayab'> </td>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell'><button className='btn'></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell gayab'> </td>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell'><button className='btn'></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn'></button></td>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell gayab'> 3</td>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell'><button className='btn'></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell'><button className='btn'></button></td>
          <td className='cell gayab'> 3</td>
          <td className='cell'><button className='btn'></button> </td>
          <td className='cell'><button className='btn'></button> </td>
        </tr>
      </table>

    </div>

  )
}