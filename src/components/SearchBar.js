import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      inputText: ''
    };
  }

  changeValue = (e) => {
    return this.setState({ inputText: e.target.value });
  }

  submitText = (e) => {
    e.preventDefault();
    
    // TODO::: CALL API HERE
    this.props.onFormSubmit(this.state.inputText);
  }

  render = () => { 
    return ( 
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.submitText}>
          <div className="field">
            <label>Youtube Search</label>
            <input type="text" onChange={this.changeValue} value={this.state.inputText}></input>
          </div>
        </form>
      </div>
     );
  }
}
 
export default SearchBar;
