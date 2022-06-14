import React, { Component } from 'react';

import './form-item.css';

export default class FormItem extends Component {

    state = {
        isSubmitted: false,
        id: this.props.item.id,
        name: this.props.item.name,
        link: this.props.item.link,
        price: this.props.item.price,
        description: this.props.item.description,
        image: this.props.item.image
    }

    onChange = (e) => {
        this.setState({isSubmitted: false});
        switch (e.target.placeholder) {
            case 'image':
                return this.setState({
                    image: e.target.value
                })
            case 'name':
                return this.setState({
                    name: e.target.value
                })
            case 'link':
                return this.setState({
                    link: e.target.value
                })
            case 'price':
                return this.setState({
                    price: e.target.value
                })
            case 'description':
                return this.setState({
                    description: e.target.value
                })
            default:
                return null;
        }
    }

    onSubmit = (e) => {
        this.setState({isSubmitted: true});
        const out = this.props.onItemSubmitted || (() => {});
        out(this.state);
    }

    onRemove = (e) => {
        this.props.onItemRemoved(this.state.id)
    }

    inputField = (type, value) => {
        return <input className='form-control mb-1'
            type='text'
            onChange={this.onChange}
            placeholder={type}
            defaultValue={value}>
        </input>
    }

    render() {

        const { inputField, onChange, onRemove, onSubmit, state } = this;
        const { name, price, image, link, description, isSubmitted } = state;

        return (
            <div className='form-item mb-2'>
                {image ? <div className='mb-2'>
                    <img className='item-image' src={image} alt='item'></img>
                </div> : <></>}
                {inputField('image', image)}
                {inputField('name', name)}
                {inputField('link', link)}
                {inputField('price', price)}
                <div className="form-floating mb-1">
                    <textarea className="form-control"
                        id="floatingTextarea"
                        placeholder='description'
                        defaultValue={description}
                        onChange={onChange}
                    ></textarea>
                    <label htmlFor="floatingTextarea">description</label>
                </div>

                <div className="d-grid gap-2 d-md-block">
                    {!isSubmitted ?
                        <button className='btn btn-sm btn-success me-1'
                            type='button'
                            onClick={onSubmit}>
                                submit
                            </button>
                        :
                        <button className='btn btn-sm btn-outline-success item-button disabled me-1'
                            type='button'>submited</button>
                    }
                    <button
                        className='btn btn-danger btn-sm item-remove-button'
                        onClick={onRemove}
                        type='button'>
                        <i className="fa-solid fa-trash"></i>   
                    </button>
                </div>

            </div>
        );

    }
};
