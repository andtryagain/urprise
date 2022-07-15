import { useState, useEffect } from 'react'
import { StyleSheet, Font, View, Image, Text, Link } from '@react-pdf/renderer'

import Service from '../../services'

import UbuntuMonoRegular from '../../fonts/UbuntuMono-R.ttf'
import UbuntuMonoRegularItalic from '../../fonts/UbuntuMono-RI.ttf'
import UbuntuMonoBold from '../../fonts/UbuntuMono-B.ttf'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        margin: '10px 100px 0 100px',
        padding: 10,
        border: '1px solid black',
        borderRadius: 10,
        minHeight: 140
    }, imgContainer: {
        marginRight: 10,
        height: 120,
        width: 120
    }, img: {
        objectFit: 'contain'
        // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
    }, textContainer : {
        flex: 1,
        fontFamily: 'UbuntuMono Regular'
    }, itemName : {
        fontFamily: 'UbuntuMono Bold',
        fontSize: 14
    }, itemPrice : {
        fontFamily: 'UbuntuMono Regular Italic',
        fontSize: 8
    }, itemDescription : {
        marginTop: 10,
        fontSize: 10
    }, linkName : {
        color: 'black',
        textDecoration: 'none'
    }
})

Font.register({
    family: 'UbuntuMono Regular',
    src: UbuntuMonoRegular
});

Font.register({
    family: 'UbuntuMono Regular Italic',
    src: UbuntuMonoRegularItalic
});

Font.register({
    family: 'UbuntuMono Bold',
    src: UbuntuMonoBold
});

const DocumentListItem = ({item}) => {

    const [itemImage, setItemImage] = useState('')
    const s = new Service()

    useEffect(() => {
        s.getImage(item.image)
            .then( data => setItemImage(data))
    })

    return <View style={styles.item}>
        <View style={styles.imgContainer}>
            <Image style={styles.img} src={itemImage}></Image>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.itemName}>
                <Link 
                    src={item.link} 
                    style={styles.linkName}>
                    {item.name}
                </Link>
            </Text>
            <Text style={styles.itemPrice}>{item.price} $</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
    </View>
}

export default DocumentListItem
