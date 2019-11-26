import React from 'react'
import axios from 'axios'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
class Booklist extends React.Component {
    constructor(props){
        super(props)
        this.state={books:[]}
    }
    componentDidMount(){
            axios.get("http://localhost:30000/api/books")
        .then(response=>{
            this.setState({
                books:response.data
            })
        })    }
    render(){
        return(
        <div>
            here goes books
            {this.state.books.map((item, index) => (
                    <li key={index}><Link to={`/book/${item.id}`}>{item.title}</Link></li>
                ))}
            
        </div>)
    }
}
export default Booklist