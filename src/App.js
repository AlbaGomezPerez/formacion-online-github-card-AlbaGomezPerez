import React from 'react';
import {GetAdalabers} from './services/GetAdalabers';
import AdalabersSelectOptions from "./components/AdalabersSelectOptions";
import AdalaberCard from "./components/AdalaberCard";
import './App.css';



class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            AllAdalabers: [],
            SearchName: ''
        };
    }

    componentDidMount() {
        this.getStudents();
    }


    getStudents() {
     GetAdalabers()
        .then(data => {
            this.setState({
               AllAdalabers : data
         });
      });
    }


        render() {
        const {AllAdalabers} = this.state;
        return (
            <React.Fragment>
                <h1>hola</h1>
                <div className="container">
                    <button className="button">Click me</button>
                    <AdalabersSelectOptions
                        AllAdalabers = {AllAdalabers}
                    />
                    <AdalaberCard
                        AllAdalabers = {AllAdalabers}
                    />
                </div>
            </React.Fragment>




        );

    };

}

export default App;




