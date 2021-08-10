import React from "react";
import './css/form.css';

export default function Form() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontWeight: '600', fontSize: 36, color: "#373c59"}}>Заповніть форму</h1>
      <button className="btn1">Фіз. ocoба</button>
      <button className="btn2">Юр. ocoба</button>
      <div className="formContainer">
        <div style={{width: '50%', textAlign: 'left', float: 'left'}}>
          <label className="formLabel">Ім'я</label>
          <input 
            className="formInput"
          />
        </div>
        <div style={{width: '25%', textAlign: 'left'}}>Ім'я</div>
      </div>
    </div>
  );
}