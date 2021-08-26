import React, { useState } from 'react';
import WhatsAppImg from './whatsapp.png';
import './App.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { isBrowser } from "react-device-detect";
function App() {
  const [mobile, setMobile] = useState("");

  console.log('isBrowser', isBrowser);
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
              </div>
              <a
                className={`btn btn-success mt-4 fw6 ${mobile?.length > 6 ? '' : 'disabled'}`}
                target="_blank"
                href={isBrowser ? `https://web.whatsapp.com/send?phone=${mobile}` : `http://wa.me/${mobile}`}
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="py-3">
            <h5 className="text-center fw6">&#9830; Benefits &#9830;</h5>
            <div className="d-flex mt-3">
              <p className="fw-bolder pr6">&#x2609;</p>
              <p className="fw-bolder">Open the WhatsApp chat window for a number without saving the number.</p>
            </div>
            <div className="d-flex">
              <p className="fw-bolder pr6">&#x2609;</p>
              <p className="fw-bolder">बिना नंबर सेव किए किसी नंबर के लिए WhatsApp Chat खोलें|</p>
            </div>
            <h5 className="text-center fw6">&#9830; Why? &#9830;</h5>
            <div className="d-flex mt-3">
              <p className="fw-bolder pr6">&#x2609;</p>
              <p className="fw-bolder">Sending WhatsApp messages without saving the number has following advantages:</p>
            </div>
            <div className="d-flex">
              <p className="fw-bolder pr6">&#x2609;</p>
              <p className="fw-bolder">बिना नंबर सेव किए WhatsApp messages भेजने के निम्नलिखित फायदे हैं:</p>
            </div>
            <div className="d-flex">
              <p className="fw5 pr6">1.</p>
              <p className="fw5">Start a chat from WhatsApp Web, without needing the phone to save the contact</p>
            </div>
            <div className="d-flex">
              <p className="fw5 pr6">2.</p>
              <p className="fw5">Contacts list are only the one who we want to save</p>
            </div>
            <div className="d-flex">
              <p className="fw5 pr6">3.</p>
              <p className="fw5">Saves time to message, share files and location whenever required</p>
            </div>
            <div className="d-flex">
              <p className="fw5 pr6">4.</p>
              <p className="fw5">Your profile picture, and status if made private will not be visible to any unsaved numbers</p>
            </div>
            <p className="fw-bolder mt-4 text-center">- - -</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
