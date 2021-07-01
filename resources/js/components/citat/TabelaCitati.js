import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import axios from 'axios'
import {Modal,Button,CardColumns,Card} from 'react-bootstrap'
import './tabela.css'
import { TrashFill } from 'react-bootstrap-icons';
//import { render } from 'node-sass';
//import { response } from 'express';

export default class TabelaCitati extends Component{
    constructor() {
        super();
            this.state = {
                citati: []
            }
        
    }

    componentDidMount(){
            axios.get('http://127.0.0.1:8000/citati')
            .then(response => {
                this.setState({ citati: response.data });
            });
    }

    onDelete(citat_id){
        console.log(citat_id);
        axios.delete('http://127.0.0.1:8000/citati/izbrisi/'+citat_id)
        .then(response=>{
            var citati1=this.state.citati;

            for(var i=0;i<=citati1.length;i++){
                if(citati1[i].id==citat_id){
                    citati1.splice(i,1);
                    this.setState({citati:citati1});
                }
            }
        })
    }

    render(){
        return (
            <div>
                <CardColumns>
                    {
                        this.state.citati.map(citat=>{
                            return(
                                <Card key={citat.id} className = "text-right" >
                                    <blockquote className="blockquote mb-0 card-body">
                                        <p>
                                            <strong>"</strong>{citat.tekst}<strong>"</strong>
                                        </p>
                                        <footer className="blockquote-footer">
                                            <small className="text-muted">
                                                {citat.ime} {citat.prezime}
                                            </small>
                                        </footer>
                                        <div className="text-center">
                                            <button className="btn btn-danger" onClick={this.onDelete.bind(this,citat.id)}><TrashFill/>Obrisi citat</button>

                                        </div>
                                    </blockquote>
                                </Card>
                            )
                        })
                    }
                </CardColumns>



                {/* <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tekst citata</th>
                            <th scope="col">Opis</th>
                            <th scope="col">Ime</th>
                            <th scope="col">Prezime</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.citati.map(citat=>{
                                return(
                                    <tr key={citat.id}>
                                        <th scope="row">{citat.id}</th>
                                        <td>{citat.tekst}</td>
                                        <td>{citat.opis}</td>
                                        <td>{citat.ime}</td>
                                        <td>{citat.prezime}</td>
                                        <td>AKCIJA</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
            </div>
    
        );
    }



  
}