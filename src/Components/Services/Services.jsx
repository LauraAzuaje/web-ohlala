import React from 'react';
import './Services.css';
import taller from "../../images/taller.jpg"



export const Services = () => {
  return (
  <>

  <div className='bannerTaller'>
    <img src={taller} alt="" />
  </div>
  
  <div className='taller'>
  <div className='tallerOnline'>
        <h1>Taller Online</h1>
        <p>✓ Masa de Donas <br />
           ✓ Rellenos Varios <br />
           ✓ Glaseados Varios <br />

INCLUYE <br />
- Material (ingredientes)<br />
- Material de apoyo (digital e impreso) <br />
- Asesoría post curso
</p>

 <a href='https://wa.me/573128206815?text=Hola,%20quiero%20tener%20más%20información%20sobre%20el%20curso%20Online'>
<box-icon color="black" name='whatsapp' type='logo' ></box-icon> </a>
</div>

<div className='tallerPresencial'>
        <h1>Taller Presencial</h1>
        <p>✓ Masa de Donas <br />
           ✓ Rellenos Varios <br />
           ✓ Glaseados Varios <br />

INCLUYE <br />
- Material (ingredientes)<br />
- Material de apoyo (digital e impreso) <br />
- Asesoría post curso 
</p> 

<a href='https://wa.me/573128206815?text=Hola,%20quiero%20tener%20más%20información%20sobre%20el%20curso%20Presencial'>
<box-icon color="black" name='whatsapp' type='logo' ></box-icon> </a>
</div>
</div>

  </>
  )
};