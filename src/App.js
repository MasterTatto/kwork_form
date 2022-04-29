import logo from './logo.svg';
import './App.css';
import AddedClientForm from "./pages/addedClientForm";
import Calendar from "react-calendar";
import {useState} from "react";
import 'react-calendar/dist/Calendar.css';

function App() {


    return (
        <div className="App">

            <AddedClientForm/>
        </div>
    );
}

export default App;
