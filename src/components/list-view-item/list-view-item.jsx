import './list-view-item.css'

const ListViewItem = ({item}) => {
    const { name, price, image, description } = item;

    return <div className='item-cntnr'>
        <div className='item-cntnr-img'>
            <img 
                className='img-cntnr'
                alt='item'
                src={"dasdasd" + image}
                onError="this.onerror=null;this.src='https://placeimg.com/200/300/animals';"
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