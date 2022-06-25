import { useParams } from "react-router-dom"
import { connect } from "react-redux"

import dateFormat from 'dateformat'
import ListViewItem from "../list-view-item"

const ListView = ({ lists }) => {
    const {id} = useParams();
    const viewedList = lists.find(x => x.id === id)

    const elements = viewedList.items.map((item) => {
        return <ListViewItem key={item.id} item={item}/>
    })

    console.log(viewedList.created)

    return <div className="position-relative mt-4">
        <div className="position-absolute top-0 start-50 translate-middle-x w-75">
        <h2>{viewedList.title}</h2>
        <h4>list #{viewedList.id}</h4>
        <h5>
            {'created at: '+ dateFormat(viewedList.created, 'HH:MM dd-mm-yyyy') }
        </h5>
        {elements}
    </div>
    </div> 
    
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(ListView)