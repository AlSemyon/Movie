import React, { Component } from 'react';

class FilmForm extends Component {
    state = {
        ...
    }

    handleChange = ...

    handleSubmit = ...

    render() {
        let {films} = this.state;
        if (!films.length) {
            return <h1>Loading.......</h1>
        }
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
