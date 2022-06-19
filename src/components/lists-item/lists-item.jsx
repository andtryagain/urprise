import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeList } from '../actions';
import ButtonToForm from '../button-to-form';
import './lists-item.css'

const ListsItem = ({ list, removeList }) => {

    const { id, title, items } = list

    const elements = items.map((item) => {
        return <li className='me-1'
            key={item.id}>
            <a className='text-light item-link' href={item.link} rel='noreferrer' target='_blank'>
                /{item.name}
            </a>
        </li>
    });

    const onRemove = (e) => {
        removeList(id)
    }

    return <li>
        <div className='lists-item bg-dark'>
            <Link to={"/list/" + id}>{title}</Link>
            <ul className='list-items mb-1'>
                {elements}
            </ul>
            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <Link to={`/document/${id}`}>
                    <button
                        className='btn btn-success'>
                        <i className="fa-solid fa-file-arrow-down"></i>
                    </button>
                </Link>
                <ButtonToForm editType editList={list} />
                <button
                    className='btn btn-danger'
                    onClick={onRemove}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>

        </div>
    </li>
};

const mapDispatchToProps = {
    removeList
}

export default connect(null, mapDispatchToProps)(ListsItem);
