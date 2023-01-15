import React, {useState,useRef,useEffect} from 'react';
import './Login.css';
import { Navigate, useNavigate} from 'react-router-dom';

import immo from"../../assets/images/immo.jpg"
export default function Login() {
  
     const [user,setUser]=useState('');
     const [pwd,setPwd]=useState('');
     const [errMsg,setErrMsg]=useState('');
     const [success,setSuccess]=useState(false);
     const userRef=useRef();
     const errRef=useRef();
     useEffect(()=>{
      //userRef.current.focus();
    })
     useEffect(()=>{
        setErrMsg('');
     },[user,pwd])
     
     const handleSubmit=e=>{
      e.preventDefault();
       setUser('');
      setPwd('');
      setSuccess(true);

     }
    return (
      <>
      {success ?(
        <section>
          <h1>You are logged In</h1>
        </section>
      )
      :(
        <>
      <p ref={errRef}className={errMsg?"errmsg":"offscreen"}aria-live="assertive">
      {errMsg}
   </p>
      
      <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
           
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <img className="img" src={immo}/>
              
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
                  </div>
                  
                </div>
                <form  onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label for="name">Username</label>
                    <input type="text" id="name" className="form-control"aria-describedby="Help" ref={userRef} placeholder="Username"onChange={(e) => setUser(e.target.value)} required/>
                  </div>
                  <div>

                  </div>
 
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" className="form-control"aria-describedby="Help"  placeholder="Password" onChange={(e) =>setPwd(e.target.value)} required/>
                  </div>
                  
                  <div>
                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                  </div>
               
                  
                </form>
                <p className="text-center">Not a member? <a data-toggle="tab" href="/signup">Sign Up</a></p>
             
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
  }
    </>
    )
  }