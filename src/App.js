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
                </div>
                <div className="containerCard">
                    <div className="profileImage">image</div>
                    <p className="profileLogin">login</p>
                    <p className="profileName">name</p>
                    <p className="profileLocalitation">localitation</p>
                    <p className="profileFollowers">followers</p>
                    <p className="profileFollowing">Following</p>

                </div>


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




