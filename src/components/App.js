import React, {PureComponent} from "react"
import {connect} from "react-redux"
import ListItem from "./ListItem"
import {addItem, removeItem, updateItem} from "../redux/actions"
import "./App.sass"

class App extends PureComponent {
  state = {
    inputValue: ''
  };

  addItem = (event) => {
    event.preventDefault();

    this.props.addItem(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  };

  render() {
    return (
      <div className="app">
        {this.props.items.length ?
          <div className="list">
            {this.props.items.map(item =>
              <ListItem
                key={item.id}
                text={item.text}
                isDone={item.isDone}
                onRemoveClick={() => this.props.removeItem(item.id)}
                onUpdateClick={(changes) => this.props.updateItem({...item, ...changes})}
              />
            )
            }
          </div>
          :
          <h3>Nothing here so far :(</h3>
        }

        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Item text"
            value={this.state.inputValue}
            onChange={(e) => this.setState({inputValue: e.target.value})}
          />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({items}) => ({items});
const mapDispatchToProps = (dispatch) => ({
  addItem: (itemText) => {
    dispatch(addItem(itemText))
  },
  removeItem: (itemId) => {
    dispatch(removeItem(itemId))
  },
  updateItem: (item) => {
    dispatch(updateItem(item))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)