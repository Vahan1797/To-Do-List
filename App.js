import React from 'react';
import './App.css';
import Notes from './Notes'
import { withoutIndex } from './Utils'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: [
        'Get up',
        'Have a breakfast'
      ]
    }
  }

  onDelete = indexToRemove => {
    this.setState(oldState => {
      return {
        notes: withoutIndex(oldState.notes, indexToRemove)
      }

    })
  }

  onNoteCreate = NewNoteText => {
    this.setState(oldState => {
      return {
        notes: [NewNoteText].concat(oldState.notes)
      }
    })
  }

  render() {
    return (<Notes notes={this.state.notes} onDelete={this.onDelete} onCreate={this.onNoteCreate} />)
  }
}
