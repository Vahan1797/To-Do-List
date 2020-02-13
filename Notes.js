import React from 'react'
import './Notes.css'

class Note extends React.Component {
    render() {
        return <div className='Notes-Note'>
            <spam className='Notes-Note-Delete' onClick={this.props.onDelete}>&times;</spam>
            {this.props.text}
        </div>
    }
}

class CreateNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onReset = () => {
        this.setState({
            text: ''
        })
    }

    onSave = () => {
        this.props.onCreate(this.state.text)
        this.onReset()

    }


    render() {
        return (
            <div className='Notes-Create Notes-Note'>
                <textarea className='Notes-Create-Input' value={this.state.text} onChange={this.onTextChange}></textarea>
                <div className='Notes-Create-Buttons'>
                    <button className='Notes-Create-Button'  >Save</button>
                    <button className='Notes-Create-Button Notes-Create-Input_reset' onClick={this.onReset}>Delete</button>
                </div>

            </div>
        )
    }
}




export default class Notes extends React.Component {
    render() {
        return (
            <div className='Notes'>
                <CreateNote onCreate={this.props.onCreate} />
                <hr />

                {this.props.notes.map((text, index) => {
                    return (
                        <Note text={text} key={index} onDelete={() => this.props.onDelete(index)} />
                    )
                })}
            </div>
        )
    }
}