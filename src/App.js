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
            SelectAdalaber: ''
        };

        this.getAdalaberOption = this.getAdalaberOption.bind(this);
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

    //Select event
    getAdalaberOption(event) {
        const SelectAdalaber = event.currentTarget.id;
        this.setState({
            SelectAdalaber: SelectAdalaber
        });

    }


        render() {
        const {AllAdalabers, SelectAdalaber} = this.state;
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




