import logo from './logo.svg';
import './App.css';
import Box from './Box';
import React ,{Component} from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true
    }
  }
  onRemoveBox = () => {
    this.setState ({isDisplay: false});
  }
  render() {
    return (
      <div className='container'>
        {this.state.isDisplay && <Box />}
        <div onClick={this.onRemoveBox}>Xóa component Box</div>
      </div>
    ); 
  }
}

export default App;
