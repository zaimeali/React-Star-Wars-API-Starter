import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.dev/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            character: {},
            loading: false
        }
    }
    
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch('https://swapi.dev/api/people/1/')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }
    
    render() {
        let myText = this.state.loading ? "Loading... Please wait" : this.state.character.name;
        return (
            <div>
                { myText }
            </div>
        )
    }
}

export default App
