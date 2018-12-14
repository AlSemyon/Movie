import React, { Component } from 'react';

class FilmForm extends Component {
    state = {
        title: '',
        description: '',
        duration: 0,
        price: 0,
        director: ''
    }

    handleChange = ({ target }) => this.setState({
        [target.name]: target.type === 'number' ?
            parseFloat(target.value) : target.value
    })

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        const {title, description, duration, price, director} = this.state;
        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label htmlFor="title">Film title</label>
                            <input id="title"
                                   placeholder="film title"
                                   type="text"
                                   name="title"
                                   onChange={this.handleChange}
                                   value={title}/>
                        </div>
                        <div className="field">
                            <label htmlFor="description">Film description</label>
                            <input id="description"
                                   placeholder="film description"
                                   type="text"
                                   name="description"
                                   onChange={this.handleChange}
                                   value={description}/>
                        </div>
                        <div className="field">
                            <label htmlFor="duration">Film duration</label>
                            <input id="duration"
                                   placeholder="film duration"
                                   type="number"
                                   name="duration"
                                   onChange={this.handleChange}
                                   value={duration}/>
                        </div>
                        <div className="field">
                            <label htmlFor="price">Film price</label>
                            <input id="price"
                                   placeholder="film price"
                                   type="number"
                                   name="price"
                                   onChange={this.handleChange}
                                   value={price}/>
                        </div>
                        <div className="field">
                            <label htmlFor="director">Film director</label>
                            <input id="director"
                                   placeholder="film director"
                                   type="text"
                                   name="director"
                                   onChange={this.handleChange}
                                   value={director}/>
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
