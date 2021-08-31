import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import TabelaCitati from './TabelaCitati';
import DodajCitat from './DodajCitat';

function Index() {
    return (
        <div>
            <div className="row mt-5">

            </div>
            <Router>
                <div className="mt-5 mb-5">
                    <Link to="/citati" className="btn mr-5">Svi citati</Link>
                    <Link to="/citati/dodaj" className="btn ">Dodaj citat</Link>
                    <Route exact path="/citati" component={TabelaCitati}></Route>
                    <Route exact path="/citati/dodaj" component={DodajCitat}></Route> 
                </div>
            </Router> 
        </div>

    );
}

export default Index;
