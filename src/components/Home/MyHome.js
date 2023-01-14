import React from 'react';
import { Link } from 'react-router-dom';
import immo from"../../assets/images/immo.jpg"
import './home.css';
const MyHome = () => {
    return (
        <div className="cards">
        <section className="clubs-section">
        <div className="row justify-content-start">
        {/* {clubs!== undefined && clubs.map((c,index)=>{ */}
              
            <div className="col-lg-4 col-md-4 col-sm-2 offset-xs-1">
       
      
       <div className="card-sl">
                    <div className="card-image">
                   <img
                          src={immo} />
    
                    </div>

                 
                    <div className="card-heading">
                     Nom article
                    </div>
                    <div className="card-body">
                    <p>Prix</p> 

                    <p>Contact</p> 
                    </div>
                    
             
        
      
        
        <a className="card-button"> Détails</a>
     
    </div>
</div>

           
     
      
   
     
           
           </div>
     </section>
    </div>
    );
}

export default MyHome;
