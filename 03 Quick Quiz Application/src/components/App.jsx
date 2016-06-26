import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Mickael'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Steven'
                        }
                    ],
                    correct: 'b'
                },

                {
                    id: 2,
                    text: 'What is your mothers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Sara'
                        },
                        {
                            id: 'b',
                            text: 'Sue'
                        },
                        {
                            id: 'c',
                            text: 'Donna'
                        }
                    ],
                    correct: 'c'
                },

                {
                    id: 3,
                    text: 'What is your faters name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Bobby'
                        },
                        {
                            id: 'b',
                            text: 'Harry'
                        },
                        {
                            id: 'c',
                            text: 'Wayne'
                        }
                    ],
                    correct: 'c'
                },

                {
                    id: 4,
                    text: 'What is your friends name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'John'
                        },
                        {
                            id: 'b',
                            text: 'Paul'
                        },
                        {
                            id: 'c',
                            text: 'Jose'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        };
    }

    render(){
        return(
            <div>
                <QuestionList {...this.state} />
            </div>
        )
    }
}


export default App
