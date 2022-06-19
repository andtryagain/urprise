import { useState } from 'react';

import Service from '../../services';

import './list-view-item.css'
import b64_not_found_image from '../../base64_files'

const ListViewItem = ({ item }) => {

    const s = new Service()

    const { name, price, description, image } = item;
    const [imageSrc, setImageSrc] = useState(image);

    const srcOnError = s.addPrefixToBase64Data(b64_not_found_image)    
    
    const onError = () => setImageSrc(srcOnError);

    return <div className='item-cntnr'>
        <div className='item-cntnr-img'>
            <img
                className='img-cntnr'
                alt='item'
                src={imageSrc ? imageSrc : srcOnError }
                onError={onError}
            >
            </img>
        </div>
        <div className='ms-3'>
            <h4 className='mb-0'>{name}</h4>
            <p className='fs-6'>{price}</p>
            <p className='lh-1'>{description}</p>
        </div>
    </div>
}

export default ListViewItem;