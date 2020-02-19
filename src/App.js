import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";
import TextServices from './services/resources/TextService';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            text: '',
            selectedWord: '',
            loadingText: false,
        };
    }

    componentDidMount() {
        this.getText();
    }

    getText = async () => {
        try {
            this.setState({
                loadingText: true,
            });
        
            const text = await TextServices.getText();
    
            this.setState({
                text,
                loadingText: false,
            });
        } catch (error) {
            console.error(error);
            this.setState({
                loadingText: false,
            });
        }
    };

    onWordSelected = selectedWord => {
        this.setState({
            selectedWord,
        });
    }

    onWordUpdated = newWord => {
        this.setState(prevState => ({
            text: prevState.text.replace(prevState.selectedWord, newWord),
            selectedWord: newWord,
        }));
    };

    render() {
        const { text, selectedWord } = this.state;
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel
                        selectedWord={selectedWord}
                        onWordUpdated={this.onWordUpdated}
                    />
                    <FileZone
                        text={text}
                        selectedWord={selectedWord}
                        onWordSelected={this.onWordSelected}
                        onWordUpdated={this.onWordUpdated}
                    />
                </main>
            </div>
        );
    }
}

export default App;
