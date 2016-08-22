import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBRbAw83DiaBxv3rFqYx61VPk70yMDsNPw';

// Create a new component. This component should produce some html
const App = () => {
    return (
        <div> 
            <h1>Hello ReactJS!</h1>
            <SearchBar />
        </div>
    )
}

// Take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));