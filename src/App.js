import React from 'react';
import {GetAdalabers} from './services/GetAdalabers';
import './App.css';
import AdalabersSelectOptions from "./components/AdalabersSelectOptions";



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
               AllAdalabers : data.results
         });
      });
    }

    render() {
        const {AllAdalabers} = this.state;
        return (
            <React.Fragment>
                <h1>hola</h1>

                <AdalabersSelectOptions
                    AllAdalabers = {AllAdalabers}
                />
            </React.Fragment>




        );

    };

}

// {AllAdalabers
//     .map(item =>{
//         return(
//             console.log(item);
//         )
//     })
// }
export default App;




