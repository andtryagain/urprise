import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({button}) => {

    const [emoji, setEmoji] = useState('')

    useEffect(() => {
        const emojiArr = ['🥳','🎂', '🎉', '🎁']
        setEmoji(emojiArr[Math.floor(Math.random()*emojiArr.length)])
    }, [])

    return (
        <header className="d-flex flex-wrap py-2 bg-warning">
            <Link to='/' className="d-flex mb-md-0 me-auto ms-4 text-white text-decoration-none">
                <span className="fs-4">{emoji + ' urprise'}</span>
            </Link>

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