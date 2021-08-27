import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// This was added by Tobi
<Route
  exact
  path="/items/:id/edit"
  render={props => <ItemEditForm {...props} updateItem={this.updateItem} />}
/>


// This (PUT Request) was added by Tobi 
updateItem = item => {
  axios.put(`http://localhost:3333/items/${item.id}`, item)
    .then(res => {
      this.setState({items: res.data});
      this.props.history.push('/items');
    })
    .catch(err => console.log(err));
}

export default App;
