import React, { useState } from 'react';
import WhatsAppImg from './whatsapp.png';
import './App.css';

function App() {
  const [mobile, setMobile] = useState("");

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center">
            <img src={WhatsAppImg} alt="WhatsAppImg" className="w-75 p-2" />
          </div>
          <div className="card p-3 mt-1">
            <div className="card p-3">
              <div className="form-group">
                <label className="mb-1" for="mobile">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter mobile with country code"
                  onChange={(e) => setMobile(e.target.value)}
                />
                <small className="text-muted font-weight-lighter">
                  Format: 91##########
                </small>
              </div>
              <a className="btn btn-success mt-4" target="_blank" href={`http://wa.me/${mobile}`} rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
