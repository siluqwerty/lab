import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function Lab2() {
  const navigate = useNavigate();

  return (

    <div>
      <Header />
      <center><h1>Lab no. 2</h1></center>
      <table className='tab'>

        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc1'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc2'); }}></button> </td>
          <td className='cell gayab'> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc3'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc4'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc5'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc6'); }}></button> </td>
          <td className='cell gayab'> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc7'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc8'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc9'); }}></button></td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc10'); }}></button> </td>
          <td className='cell gayab'> 3</td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc11'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc12'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc13'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc14'); }}></button></td>
          <td className='cell gayab'> 3</td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc15'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l2pc16'); }}></button> </td>
        </tr>
      </table>

    </div>

  )
}