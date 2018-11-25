import React, {Component} from "react";
import './ListItem.css';


export default class ListItem extends Component {
  state = {
    isEditingMode: false,
    inputValue: null
  };

  onChecked = (e) => {
    this.props.onUpdateClick({isDone: e.target.checked})
  };

  onInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  };

  onSaveClicked = () => {
    this.setState({isEditingMode: false});
    this.props.onUpdateClick({text: this.state.inputValue});
  };

  render() {
    const text = this.state.inputValue || this.props.text;

    return (
      <div className='listItem'>
        <input type="checkbox" defaultChecked={this.props.isDone} onChange={this.onChecked}/>
        {this.state.isEditingMode ?
          <>
            <input type="text" value={text} onChange={this.onInputChange}/>
            <button onClick={this.onSaveClicked}>Save</button>
          </>
          :
          <>
            <p>{this.props.text}</p>
            <button onClick={() => this.setState({isEditingMode: true})}>Edit</button>
            <button onClick={this.props.onRemoveClick}>Delete</button>
          </>
        }
      </div>
    )
  }
}