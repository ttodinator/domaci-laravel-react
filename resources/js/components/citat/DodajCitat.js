import React from 'react';
import axios from 'axios'
import {Form,Select,Option} from 'react-bootstrap'




export default class DodajCitat extends React.Component {



    constructor(props) {
      
      super(props);
      this.state = {value: '',pisci:[],pisacJedan:'',citat:'',opis:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.promena=this.promena.bind(this);
      this.promena1=this.promena1.bind(this);
      this.promena2=this.promena2.bind(this);
      //this.handleChangeCitat = this.handleChangeCitat.bind(this);
      //this.handleChangePisac = this.handleChangePisac.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/pisci')
      .then(response => {
          this.setState({ pisci: response.data });
      });
    }
  
    promena(event){
      this.setState({citat:event.target.value});
    }

    promena1(event){
      this.setState({pisacJedan:event.target.value});
    }

    promena2(event){
      this.setState({opis:event.target.value});
    }


    handleChange(event) {
      this.setState({citat: event.target.value});
    }

  
    handleSubmit(event) {
      event.preventDefault();
      
      if(this.state.pisacJedan===''){
        this.state.pisacJedan=1;
      }

      if(this.state.pisacJedan==='' ||
         this.state.citat==='' ||
         this.state.opis==''
      ){
        alert('Nisu uneti svi potrebni podaci');
        return;
      }



      const citatNovi={
         tekst:this.state.citat,pisac_id:this.state.pisacJedan,opis:this.state.opis
      }

      axios.post('http://127.0.0.1:8000/citati/sacuvaj',citatNovi)
      .then(res=>{
        alert('Uspesno ste uneli citat');
      });

    }
  
    render() {
      return (
        <div>
          <h1 className="text-center mt-5">Unisite novi citat:</h1>
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
            <div className="form-group">
              <label>Tekst citata:</label>
              <input type="text" className="form-control" value={this.state.citat} onChange={this.promena}>
              </input>
            </div>
            <div className="form-group">
              <label>Opis:</label>
              <input type="text" className="form-control" value={this.state.opis} onChange={this.promena2}>
              </input>
            </div>
            <div className="form-group text-center">
              <button className="btn" type="submit">Sacuvaj citat</button>
            </div>
          </div>
        </div>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        </div>
      );
    }
  }