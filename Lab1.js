import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


export default function Lab1() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <center><h1>Lab no. 1</h1></center>
      <table className='tab'>

        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc1'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc2'); }}></button> </td>
          <td className='cell gayab'> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc3'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc4'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc5'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc6'); }}></button> </td>
          <td className='cell gayab'> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc7'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc8'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc9'); }}></button></td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc10'); }}></button> </td>
          <td className='cell gayab'> 3</td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc11'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc12'); }}></button> </td>
        </tr>
        <tr>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc13'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc14'); }}></button></td>
          <td className='cell gayab'> 3</td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc15'); }}></button> </td>
          <td className='cell'><button className='btn' onClick={() => { navigate('/l1pc16'); }}></button> </td>
        </tr>
      </table>

    </div>
  )
}
