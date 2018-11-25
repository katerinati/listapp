import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import './ListItem.sass';


export default class ListItem extends Component {
  state = {
    isEditingMode: false,
    inputValue: this.props.text
  };

  onChecked = (e) => {
    this.props.onUpdateClick({isDone: e.target.checked})
  };

  onInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  };

  onSaveClicked = () => {
    this.setState({isEditingMode: false});
    if (this.state.inputValue) {
      this.props.onUpdateClick({text: this.state.inputValue});
    }
  };

  onRemoveClicked = () => {
    const res = window.confirm("Are you sure?")

    if (res) {
      this.props.onRemoveClick();
    }
  };

  render() {
    return (
      <div className='listItem'>
        <input type="checkbox" defaultChecked={this.props.isDone} onChange={this.onChecked}/>
        {this.state.isEditingMode ?
          <>
            <input className="editTextInput" type="text" value={this.state.inputValue} onChange={this.onInputChange}/>
            <button onClick={this.onSaveClicked}>
              <FontAwesomeIcon icon={faSave} />
            </button>
          </>
          :
          <>
            <p>{this.props.text}</p>
            <button onClick={() => this.setState({isEditingMode: true})}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={this.onRemoveClicked}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        }
      </div>
    )
  }
}