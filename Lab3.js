import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function Lab3() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <center><h1>Lab no. 3</h1></center>
      <table className='tab'>

        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc1'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc2'); }}></button> </td>
          <td className='cell gayab'> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc3'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc4'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc5'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc6'); }}></button> </td>
          <td className='cell gayab'> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc7'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc8'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc9'); }}></button></td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc10'); }}></button> </td>
          <td className='cell gayab'> 3</td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc11'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc12'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc13'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc14'); }}></button></td>
          <td className='cell gayab'> 3</td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc15'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l3pc16'); }}></button> </td>
        </tr>
      </table>

    </div>
  )
}