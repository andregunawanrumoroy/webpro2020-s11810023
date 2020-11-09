import React from 'react';
import {cekTahun, cekHari} from '../utils/waktu';

const Hello = () => {
    return (
    <>
      <p>Hello, selamat datang dikelas web programming</p>
      <p>Tahun sekarang adalah {cekTahun()}</p>
      <p>sekarang hari {cekHari()}</p>
    </>
    );
  };

  export default Hello;