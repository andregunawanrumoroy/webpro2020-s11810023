//pertemuan_24

import React, { Component, useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import axios from 'axios';

/*
class App extends component{
    state = {
        users : [],
    };

    componentDidmount(){
        //fetch("https://jsonplaceholder.typicode.com/users")
        //.then(Response => Response.json())
        //.then(json => this.setState({users : json}));
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((Response) => this.setState ({ users : Response.data }));
    }

    render(){
        //tampilkan data
        //console.log(this.state.users);
        return <p>Class App Component</p>;

        return (
            <>
              {this.state.users.map((item) => {
                  return (
                     <Card 
                        name={Item.name}
                        username={item.username}
                        email={item.email}
                        phone={item.phone}
                        />
                    );
                })}
            </>
        )
    }
}
*/

const App = () => {

    const[users, setUsers] = useState([]);

    useEffect (() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((Response) => setUsers (Response.data));
    }, []);

    //tampilakan -- console.log(users);

    return (
        <>
            {users.map((item) => {
                return (
                    <Card
                        name={Item.name}
                        username={item.username}
                        email={item.email}
                        phone={item.phone} 
                    />
                );
            })}
        </>
    );
};

export default App;