import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const lanNav = useNavigate();
  const [fullname, setfullname] = useState("");
  const savReg = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("submit clicked.....");
    console.log("fullname---->" + fullname);
  };
  const getFullName = (e: any) => {
    setfullname(e.target.value);
  };

  const goToLandingPage = (e:FormDataEvent)=>{
e.preventDefault();
console.log("from login...");
lanNav('/landing');
  }

  return (
    <div>
    
    
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  bg-image-vertical="color: #709085;"
                ></i>
                <span className="h1 fw-bold mb-0">Leafy Dreams</span>
              </div>
              
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form onSubmit={goToLandingPage} bg-image-vertical="width: 23rem;">
                  <h3
                    className="fw-normal mb-3 pb-3"
                    bg-image-vertical="letter-spacing: 1px;"
                  >
                    Log in
                  </h3>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-info btn-lg btn-block"
                      type="submit"
                    ><a href="/landing" className="link-info"/>
                      Login
                    </button>
                  </div>

                  
                 
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://shrinkthatfootprint.com/wp-content/uploads/2023/06/image-256.png"
                alt="Login image"
                className="w-100 vh-100"
                bg-image-vertical="object-fit: cover; object-position: left;"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
