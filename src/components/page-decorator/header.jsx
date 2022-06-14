import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({button}) => {
    return (
        <header className="d-flex flex-wrap py-2 bg-warning">
            <a href="/" className="d-flex mb-md-0 me-auto ms-4 text-white text-decoration-none">
                <span className="fs-4">🎉 urprise</span>
            </a>

        { button ? <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to='/create' className="btn btn-outline-light me-4">
                    create wishlist
                </Link>
            </li>
        </ul> : <></> }
        </header>
    );
};

export default Header;