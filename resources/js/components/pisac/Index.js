import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import DodajPisca from './DodajPisca';
import TabelaPisci from './TabelaPisci';

function Index() {
    return (
        <div>
            <div className="row mt-5">

            </div>
            <Router>
                <div className="mt-5 mb-5">
                    <Link to="/pisci" className="btn mr-5">Svi autori</Link>
                    <Link to="/pisci/dodaj" className="btn ">Dodaj autora</Link>

                    <Route exact path="/pisci/dodaj" component={DodajPisca}></Route>
                    <Route exact path="/pisci" component={TabelaPisci}></Route> 
                </div>
            </Router> 
        </div>

    );
}

export default Index;
