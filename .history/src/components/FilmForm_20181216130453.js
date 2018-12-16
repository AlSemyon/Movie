import React, { Component } from 'react';
import ReactImageFallback from 'react-image-fallback'
import PropTypes from 'prop-types';
import FormMessage from './FormMessage';

const initialData = {
    title: '',
    duration: 0,
    price: 0,
    director: '',
    featured: false,
    im: '',
    id: null 
}

class FilmForm extends Component {
    state = {
        data: {
            title: '',
            duration: 0,
            price: 0,
            director: '',
            featured: false,
            im: '',
            id: null
        },
        errors: {}
    }

    componentDidMount() {
        if(this.props.film.id) {
            this.setState({data: this.props.film})
        }
    }

    componentWillReceiveProps(nextProps, state) {
        if (nextProps.film.id && nextProps.film.id !== state.date.id) {
            return {
                data: nextProps.film
            }
        } 
        if (!nextProps.film.id && state.data.id) {
            return {
                data: initialData
            }
        }
        return null;
    }

    validate = (data) => {
        let errors = {};
        if(!data.title) errors.title = "This field cann`t be blank";
        if(!data.duration > 0) errors.duration = "Too soer, isn`t it?";
        if(!data.price > 0) errors.price = "Too cheap, isn`t it?";
        if(!data.director) errors.director = "This field cann`t be blank";
        return errors;
    }
    handleChange = ({ target }) => this.setState(({data, errors}) => ({
        data: target.type === 'number' ?
        {...data,  [target.name]: parseFloat(target.value)}
        :
        {...data,  [target.name]: target.value},
        errors: {...errors, [target.name]: ''}
    }))

    handleToggleChange = ({ target }) => this.setState({
        data: {...this.state.data, [target.name]: !this.state.data[target.name]}
    })

    handleSubmit = e => {
        e.preventDefault();
        let errors = this.validate(this.state.data);
        this.setState({errors})

        if(Object.keys(errors).length === 0){
            this.props.saveFilm(this.state.data)
        }
    }

    render() {
        const {data, errors} = this.state;
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
                                   value={data.title}/>
                            <FormMessage content={errors.title} type="error"/>
                        </div>
                        <div className="field">
                            <label htmlFor="duration">Film duration</label>
                            <input id="duration"
                                   placeholder="film duration"
                                   type="number"
                                   name="duration"
                                   onChange={this.handleChange}
                                   value={data.duration}/>
                            <FormMessage content={errors.duration} type="error"/>
                        </div>
                        <div className="field">
                            <label htmlFor="price">Film price</label>
                            <input id="price"
                                   placeholder="film price"
                                   type="number"
                                   name="price"
                                   onChange={this.handleChange}
                                   value={data.price}/>
                            <FormMessage content={errors.price} type="error"/>
                        </div>
                        <div className="field">
                            <label htmlFor="director">Film director</label>
                            <input id="director"
                                   placeholder="film director"
                                   type="text"
                                   name="director"
                                   onChange={this.handleChange}
                                   value={data.director}/>
                            <FormMessage content={errors.director} type="error"/>
                        </div>

                        <div className="field">
                            <label htmlFor="featured">Featured</label>
                            <input id="featured"
                                   type="checkbox"
                                   name="featured"
                                   onChange={this.handleToggleChange}
                                   checked={data.featured}/>
                        </div>

                        <div className="field">
                            <label htmlFor="im">Poster URL</label>
                            <input id="im"
                                   placeholder="url for film"
                                   type="text"
                                   name="im"
                                   onChange={this.handleChange}
                                   value={data.im}/>
                        </div>

                        <ReactImageFallback
                            src={data.im}
                            alt="film poster"
                            className="ui image"
                            fallbackImage='http://via.placeholder.com/290x360'
                        />
                        <div className="field">
                            <button className="ui button">Create Film</button>
                            <div className="or"/>
                            <button className="ui button" onClick={this.props.closeForm}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
FilmForm.propTypes = {
    closeForm: PropTypes.func.isRequired, 
    saveFilm: PropTypes.func.isRequired
}

export default FilmForm;
