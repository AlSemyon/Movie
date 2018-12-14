import React, { Component } from 'react';

class FilmForm extends Component {
    state = {
        title: ''
    }

    handleChange = ...

    handleSubmit = ...

    render() {
        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <form className="ui form">
                        <div className="field">
                            <label>Film tittle</label>
                            <input/>
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
