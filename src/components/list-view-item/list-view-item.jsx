import React from "react"
import { useState, useEffect } from 'react'

import './list-view-item.css'
import Service from "../../services"

const ListViewItem = ({item}) => {
    const { name, price, image, description } = item

    const [itemImage, setItemImage] = useState('')
    const service = new Service();

    useEffect(() => {
        service.getImage(image)
            .then(
                responce => {
                    // parse b64
                    const prefix = service.getBase64ImageFormat(responce)
                    setItemImage(`${prefix}${responce}`)
                }
            )
    })

    return <div className='item-cntnr'>
        <div className='item-cntnr-img'>
            <img className='img-cntnr'alt='item' src={itemImage}></img>
        </div>
        <div className='ms-3'>
            <h4 className='mb-0'>{name}</h4>
            <p className='fs-6'>{price}</p>
            <p className='lh-1'>{description}</p>
        </div>
    </div>
}

export default ListViewItem