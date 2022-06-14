import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ListViewItem from "../list-view-item";

const ListView = ({ lists }) => {
    const {id} = useParams();
    const viewedList = lists.find(x => x.id === id)

    const elements = viewedList.items.map((item) => {
        return <ListViewItem key={item.id} item={item}/>
    })

    return <div className="position-relative mt-4">
        <div className="position-absolute top-0 start-50 translate-middle-x w-75">
        <h2>{viewedList.title}</h2>
        <h4>list #{viewedList.id}</h4>
        {elements}
        <button className="btn">try to pdf</button>
    </div>
    </div> 
    
}

const mapStateToProps = (state) => {
    return {
        lists: state
    };
};

export default connect(mapStateToProps)(ListView);