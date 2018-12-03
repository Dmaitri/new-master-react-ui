// This component handles the App template used on every page.
import React from 'react';
import Header from './common/Header';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
const options = [
  '5c', 'mist', 'vulcan'
]
const defaultOption = options[0]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectName: defaultOption }
  }

  handleProjectChange(event) {
    this.setState({ projectName:event.value});
  }

  render() {
    return (
      <div className="container-fluid">
        <h1><b>Talentica</b></h1>
        <div className="jumbotron">
          <h6>Select Project:</h6>
          <Dropdown options={options} value={defaultOption} placeholder="Select an option" onChange={(e) => this.handleProjectChange(e)} />
        </div>
        <Header projectName={this.state.projectName}></Header>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
// };

export default App;
