import { Component } from "react";
import { connect } from 'react-redux';
import { addList, editList } from '../actions';

import FormItem from "../form-item";

import './form.css'

class Form extends Component {

    state = {
        id: this.props.list.id,
        title: this.props.list.title,
        created: null,
        items: this.props.list.items
    };
    
    onFormClose = (e) => {
        this.props.onFormClose();
    };

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value,
            created: new Date().toISOString()
        });
    } 

    onItemAdded = (e) => {
        const { items } = this.state;
        this.setState({
            items: [
                ...items,
                {id: items.length++}
            ]
        });
        console.log(items)
    };

    onItemRemoved = (id) => {
        const { items } = this.state;
        const indexItem = items.findIndex(x => x.id === id);
        
        this.setState({
            items: [
                ...items.slice(0, indexItem),
                ...items.slice(indexItem + 1)
            ]
        });
    };

    onItemSubmitted = (item) => {
        const { items } = this.state
        const indexItem = items.findIndex(x => x.id === item.id)

        indexItem > -1 ? this.setState({
            items: [
                ...items.slice(0, indexItem),
                item,
                ...items.slice(indexItem + 1)
            ]
        }) : this.setState({
            items: [
                ...items,
                item
            ]
        })
    };

    onListFinished = (e) => {
        e.preventDefault()
        if (this.props.edit) {
            this.props.editList(this.state)
        } else {
            console.log(this.state)
            this.props.addList(this.state)
        }
        this.props.onFormClose();
    };

    render() {
        const { onTitleChange, onItemRemoved, onItemAdded, onItemSubmitted, onFormClose, onListFinished } = this;
        
        const items = this.state.items.map((item, index) => {
            return <FormItem
            key={index}
            item={item}
            onItemSubmitted={onItemSubmitted} 
            onItemRemoved={onItemRemoved}/>
        });

        return <div className="form-bg">
            <div className="form">
                <button
                    className="btn btn-close btn-sm form-close"
                    onClick={onFormClose}>
                </button>
                <form onSubmit={onListFinished}>
                    <input
                        className='form-control mt-4 mb-1'
                        type='text'
                        placeholder='list title'
                        onChange={onTitleChange}
                        defaultValue={this.state.title}
                    ></input>
                    {items}
                    <button
                        className="btn btn-outline-success me-1"
                        type="button"
                        onClick={onItemAdded}>
                        + item
                    </button>
                    <button
                        className="btn btn-outline-primary"
                        type="submit">
                        finish list
                    </button>
                </form>
            </div>
        </div>
    }
}

const mapDispatchToProps = {
    addList, editList
}

export default connect(null, mapDispatchToProps)(Form)