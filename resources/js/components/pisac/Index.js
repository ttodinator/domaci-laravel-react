import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import DodajPisca from './DodajPisca';
import TabelaPisci from './TabelaPisci';

function Index() {
    return (
        <div>
            <Router>
                <div>
                    <Link to="/pisci" className="btn ">Svi autori</Link>
                    <Link to="/pisci/dodaj" className="btn ">Dodaj autora</Link>

                    <Route exact path="/pisci/dodaj" component={DodajPisca}></Route>
                    <Route exact path="/pisci" component={TabelaPisci}></Route> 
                </div>
            </Router> 
        </div>

    );
}

export default Index;
