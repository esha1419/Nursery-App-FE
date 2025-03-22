import React from 'react'

import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const nurOpen = useNavigate();
  
  const goToNursery = (e:FormDataEvent)=>{
    e.preventDefault();
    console.log("from login...");
    nurOpen('/nursery');
  }
  const goToPlantCantegories = (e:FormDataEvent)=>{
    e.preventDefault();
    console.log("from..");
    nurOpen('/cante');
  }
  const goToPlantsPopular = (e:FormDataEvent)=>{
    e.preventDefault();
    console.log("ref");
    nurOpen('/pop');
  }
  const gotoShoppingCart = (e:FormDataEvent)=>{
    e.preventDefault();
    console.log("re..");
    nurOpen('/shop');
  }

  const gotohome =  (e:FormDataEvent)=>{
    e.preventDefault();
    console.log("hello");
   nurOpen("/home");
}
const gotoOrderhis =  (e:FormDataEvent)=>{
  e.preventDefault();
  console.log("he..lo");
 nurOpen("/order");
}



 
  

return (
  <div>
    <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Landing Page</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
        <div className='hero-section '>
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                
    
    <body>
    <form onSubmit={goToNursery} bg-image-vertical="width: 23rem;">
                      <h3
                        className="fw-normal mb-3 pb-3"
                        bg-image-vertical="letter-spacing: 1px;"
                      >
                        Nursery
                      </h3>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">landing Page</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
    
            
        </nav>
        </form>
        <form onSubmit={goToPlantCantegories} bg-image-vertical="width: 23rem;">
                      <h3
                        className="fw-normal mb-3 pb-3"
                        bg-image-vertical="letter-spacing: 1px;"
                      >
                        
                      </h3>
        
        </form>
        <form onSubmit={goToPlantsPopular} bg-image-vertical="width: 23rem;">
                      <h3
                        className="fw-normal mb-3 pb-3"
                        bg-image-vertical="letter-spacing: 1px;"
                      >
                        
                      </h3>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">landing Page</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
    
            
        </nav>
        </form>
        <form onSubmit={gotoShoppingCart} bg-image-vertical="width: 23rem;">
                      <h3
                        className="fw-normal mb-3 pb-3"
                        bg-image-vertical="letter-spacing: 1px;"
                      >
                        
                      </h3>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">landing Page</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
    
            
        </nav>
        </form>
        <form onSubmit={gotoOrderhis} bg-image-vertical="width: 23rem;">
                      <h3
                        className="fw-normal mb-3 pb-3"
                        bg-image-vertical="letter-spacing: 1px;"
                      >
                        
                      </h3>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">landing Page</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
    
            
        </nav>
        </form>
        <div className="hero-section">
            <div>
                <h1>        WELCOME TO LEAFY DREAMS         </h1>
                <p>CUSTOMISE YOUR GARDEN....</p>
                
            </div>
        </div>
        <footer className="bg-dark text-white text-center py-4">
            <p>LEAFY DREAMS MANAGEMENT</p>
            
        </footer>
        <div>
        <form onClick={gotohome} bg-image-vertical="width: 23rem;">
                  <h3
                    className="fw-normal mb-3 pb-3"
                    bg-image-vertical="letter-spacing: 1px;"
                  >
                  
                  </h3>
                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-info btn-lg btn-block"
                      type="submit"
                    ><a href="/home" className="link-info"/>
                      GO TO HOME
                    </button>
                  </div>
                  </form>
                  </div>
    
        
        
        
       
        
        
       
    </body>
    
    
    
    </div>
     </div>
        
  
  </div>
)
}
