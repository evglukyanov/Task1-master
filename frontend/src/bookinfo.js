import React from 'react'
import axios from 'axios'

class Bookinfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            book:{id:0,
                name:"",
                desc:""}
        }
    }
    componentDidMount(){
    const id=this.props.match.params.id
    console.log(this.props)
    axios.get("http://localhost:30000/api/book/"+id)
    .then(response =>{
        console.log(response.data)
        this.setState({book:response.data})
    })   
    }
    render(){
        const { params } = this.props.match
        return(
            <div>
            <h1>{this.state.book.name}</h1>
                <p>{this.state.book.desc}</p>
                <p>{this.state.book.id}</p>
            </div>
        )
    }
}
export default Bookinfo