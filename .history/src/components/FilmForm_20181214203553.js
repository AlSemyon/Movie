import React, { Component } from 'react';

class FilmForm extends Component {
    state = {
        title: '',
        description: ''
    }

    handleChange = ({target}) => this.setState({title: target.value})

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        const {title, description} = this.state;
        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label htmlFor="title">Film title</label>
                            <input id="title"
                                   placeholder="film title"
                                   type="text"
                                   onChange={this.handleChange}
                                   value={this.state.title}/>
                        </div>
                        <div className="field">
                            <button className="ui button">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default FilmForm;
