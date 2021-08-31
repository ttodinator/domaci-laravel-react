import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import axios from 'axios'
//import { render } from 'node-sass';
//import { response } from 'express';

export default class TabelaPisci extends Component{
    constructor() {
        super();
            this.state = {
                pisci: []
            }
        
    }

    componentDidMount(){
            axios.get('http://127.0.0.1:8000/pisci')
            .then(response => {
                this.setState({ pisci: response.data });
            });
    }

    // onDelete(category_id){
    //     console.log(category_id);
    //     axios.delete('http://127.0.0.1:8000/categories/delete/'+category_id)
    //     .then(response=>{
    //         var categories=this.state.categories;

    //         for(var i=0;i<=categories.length;i++){
    //             if(categories[i].id==category_id){
    //                 categories.splice(i,1);
    //                 this.setState({categories:categories});
    //             }
    //         }
    //     })
    // }

    render(){
        return (
            <div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ime</th>
                            <th scope="col">Prezime</th>
                            <th scope="col">Godina rodjenja</th>
                            <th scope="col">Istorijsko razdoblje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pisci.map(pisac=>{
                                return(
                                    <tr key={pisac.id}>
                                        <th scope="row">{pisac.id}</th>
                                        <td>{pisac.ime}</td>
                                        <td>{pisac.prezime}</td>
                                        <td>{pisac.godina_rodjenja}</td>
                                        <td>{pisac.istorijskoRazdoblje}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    
        );
    }



  
}


