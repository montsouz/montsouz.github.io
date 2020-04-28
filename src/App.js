import React,{useState} from 'react';
import MainTitle from './MainTitle/MainTitle'
import Contents from './Contents/Contents'
import './App.css';


const App = () => {

    const [contents, setContents] = useState(false);

    const toggleContentHandler = () => {
        setContents(!contents)
    };

    return (
        <div className="App">
            <header className="App-header">
                {!contents && <MainTitle action={toggleContentHandler}/>}
                {contents && <Contents/>}
            </header>
        </div>
    );

};

export default App;
