import React from 'react';
import axios from 'axios'
import {Form,Select,Option} from 'react-bootstrap'
import {Modal,Button,CardColumns,Card} from 'react-bootstrap'



export default class Selekcija extends React.Component {
  constructor(props) {
      
    super(props);
    this.state = {value: '',pisci:[],pisacJedan:'',citat:'',opis:'',pisac_id:'1',citati:[]};

    this.promena1=this.promena1.bind(this);

  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/pisci')
    .then(response => {
        this.setState({ pisci: response.data });
    });
  }

  promena1(event){
    console.log(this.state.pisac_id);
    this.setState({pisac_id:event.target.value});

    axios.get('http://127.0.0.1:8000/pisci/'+event.target.value)
    .then(response=>{
      console.log('Uspenso');
      this.setState({citati:response.data});
    })
  }


  render() {
    return (
      <div>
        <h1 className="text-center mt-5">Izaberite autora:</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="row justify-content-center mt-4">
        <div className="col-4">
          <div className="form-group">
            <label>Autor:</label>
            <select className="form-control" onChange={this.promena1}>
            {
              this.state.pisci.map((pisac)=>
              <option 
                key={pisac.id} 
                value={pisac.id}
                
                >
                  {pisac.ime} {pisac.prezime}
                
              </option>)
            }
            </select>
          </div>
          <div className="form-group text-center">
            <button className="btn" type="submit">Sacuvaj citat</button>
          </div>
        </div>
      </div>
        {/* <input type="submit" value="Submit" /> */}
      </form>

        <CardColumns>
          {
            this.state.citati.map(citat => {
              return (
                <Card key={citat.id} className="text-right" >
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      <strong>"</strong>{citat.tekst}<strong>"</strong>
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        {citat.ime} {citat.prezime}
                      </small>
                    </footer>
                  </blockquote>
                </Card>
              )
            })
          }
        </CardColumns>




      </div>
    );
  }
  }