import React, { useState } from 'react';
import WhatsAppImg from './whatsapp.png';
import './App.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function App() {
  const [mobile, setMobile] = useState("");

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center">
            <img src={WhatsAppImg} alt="WhatsAppImg" className="w-75 p-2" />
          </div>
          <div className="card p-3 mt-1">
            <div className="card p-3">
              <div className="form-group">
                <label className="mb-1 fw6" for="mobile">Enter Mobile Number</label>
                <PhoneInput
                  inputClass="w-100 cusInputStyle"
                  country={'in'}
                  value={mobile}
                  onChange={mobile => setMobile(mobile)}
                />
                <small className="text-muted font-weight-lighter mt-2 fw6">
                  Format: 91##########
                </small>
              </div>
              <a
                className={`btn btn-success mt-4 fw6 ${mobile?.length > 6 ? '' : 'disabled'}`} target="_blank"
                href={`http://wa.me/${mobile}`}
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-3 py-3">
            <div className="d-flex">
              <p className="fw-bolder pr6">&#9830;</p>
              <p className="fw-bolder">
                Open the WhatsApp chat window for a number without saving the number.
              </p>
            </div>
            <div className="d-flex">
              <p className="fw-bolder pr6">&#9830;</p>
              <p className="fw-bolder">बिना नंबर सेव किए किसी नंबर के लिए WhatsApp Chat खोलें|</p>
            </div>
            <p className="fw-bolder mt-5 text-center">- - -</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
