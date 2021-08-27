<Button onClick={this.editItem}>Edit item</Button>

class ItemEditForm extends React.Component {
    state = {
      item: {
        id: '',
        nickname: '',
        species: '',
        h20frequency: '',
        image: ''
      }
    }
  }

// GET Request with error handling 
componentDidMount = () => {
  axios.get(`http://localhost:3333/itemById/${this.props.match.params.id}`)
    .then(res => {
      this.setState({item: res.data});
    })
    .catch(err => console.log(err))
}

//POST Request with error handling
componentDidMount() {
    axios.post(`http://localhost:3333/itemById/${this.props.match.params.id}`)
        .then(res => {
            this.setState({item: res.data});
        })
        .catch(err => console.log(err))
}

//PUT Request with error handling
componentDidMount() {
    axios.put(`http://localhost:3333/itemById/${this.props.match.params.id}`)
        .then(res => {
            this.setState({item: res.data});
        })
        .catch(err => console.log(err))
}

<form onSubmit={this.handleSubmit}>

<input
type="text"
name="name"
value={this.state.item.name}
placeholder="Name"
onChange={this.handleChange}
/>

// ...

</form>

handleChange = e => {
    e.persist();
  
    this.setState(prevState => ({
      item: { ...prevState.item,  [e.target.name]: e.target.value }
    }))
  }
