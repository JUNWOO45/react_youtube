import React from 'react';

class SearchBar extends React.Component {
  state = { 
    inputText: ''
  };

  changeValue = (e) => {
    return this.setState({ inputText: e.target.value });
  }

  submitText = (e) => {
    e.preventDefault();
    console.log('haha');
  }

  render = () => { 
    return ( 
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.submitText}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" onChange={this.changeValue} value={this.state.inputText}></input>
          </div>
        </form>
      </div>
     );
  }
}
 
export default SearchBar;
