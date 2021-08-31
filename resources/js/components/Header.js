import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Home from './Home';
import './css/Header.css'
import Pisac from './pisac/Index'
import Citat from './citat/Index'
import Selekcija from './Selekcija';


function Header() {



    
    return (
        <Router>
             <div >
                <nav className="navbar navbar-expand-lg fixed-top" id="navi">
                <a className="navbar-brand" href="#">Citati srpskih velikana</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Pocetna <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/pisci">Autori</Link>
                            <Link className="nav-item nav-link" to="/citati">Citati</Link>
                            <Link className="nav-item nav-link" to="/selekcija">Selekcija</Link>
                        </div>
                    </div>
                </nav>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/pisci' component={Pisac}></Route>
            <Route exact path='/citati' component={Citat}></Route>
            <Route exact path='/selekcija' component={Selekcija}></Route>
           </div> 
        </Router>

        


    );
}



export default Header;
