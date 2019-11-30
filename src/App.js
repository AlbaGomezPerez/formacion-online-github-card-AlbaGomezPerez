import React from 'react';
import {GetAdalabers} from './services/GetAdalabers';
// import {GetDetailInfo} from './services/GetAdalabers';
import AdalabersSelectOptions from "./components/AdalabersSelectOptions";
import AdalaberCard from "./components/AdalaberCard";
import './App.css';



class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            AllAdalabers: [],
            SelectAdalaber:''
        };

        this.getAdalaberOption = this.getAdalaberOption.bind(this);
    }

    componentDidMount() {
        console.log('funciono');
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
        const SelectAdalaber = event.currentTarget.value;
        console.log(event.currentTarget.value);
        const url2 = "https://api.github.com/users/";

        fetch(url2 + SelectAdalaber)
            .then(response => response.json())
            .then(info => {
                this.setState({
                    SelectAdalaber: info
                });
            });
        console.log(url2 + SelectAdalaber);
    }


        render() {
        const {AllAdalabers, SelectAdalaber} = this.state;
        return (
            <React.Fragment>
                <div className="App">
                <h1 className="title">hola</h1>
                <div className="container">
                    <AdalabersSelectOptions
                        AllAdalabers = {AllAdalabers}
                        getAdalaberOption={this.getAdalaberOption}
                        SelectAdalaber = {SelectAdalaber}
                    />
                    <AdalaberCard
                        getAdalaberOption={this.getAdalaberOption}
                        SelectAdalaber = {SelectAdalaber}
                    />
                </div>
                </div>
            </React.Fragment>
        );

    };

}

export default App;





