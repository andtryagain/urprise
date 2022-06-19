import { connect } from 'react-redux';

import ListsItem from '../lists-item';

import './lists.css'

const Lists = ({ lists }) => {
    const elements = lists.map((list, index) => {
        return <ListsItem key={index} list={list}/>
    });

    return <div>
            <ul className='ps-0 lists'>
                {elements}
            </ul>
        </div>
};

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
};

export default connect(mapStateToProps)(Lists);
