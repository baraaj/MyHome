import React from 'react';
import { Link } from 'react-router-dom';
import immo from"../../assets/images/immo.jpg"
import './card.css';
const Card = () => {
    return (
        <div className='cards'>
           <section className="clubs-section">
        <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-8 offset-xs-1">
                <div className="card-sl">
                    <div className="card-image">
                   <img
                          src={immo} />
    
                    </div>

                 
                    <div className="card-heading">
                     Nom article
                    </div>
                    <div className="card-body">
                     Prix
                    </div>
                    
                  
                 
                </div>
            </div>
           </div>
      </section> 
        </div>
    );
}

export default Card;
