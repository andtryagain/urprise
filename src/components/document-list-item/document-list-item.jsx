import { useState, useEffect } from 'react';
import { StyleSheet, Font, View, Image, Text } from '@react-pdf/renderer';

import Service from '../../services';

import IBMPlexMonoRegular from '../../fonts/IBMPlexMono-Regular.ttf' 
import IBMPlexMonoBold from '../../fonts/IBMPlexMono-Bold.ttf' 
import IBMPlexSemiBoldItalic from '../../fonts/IBMPlexMono-SemiBoldItalic.ttf' 

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
        width: 120,
    }, img: {
        objectFit: 'contain'
        // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
    }, textContainer : {
        flex: 1,
        fontFamily: 'IBMPlexMono Regular'
    }, itemName : {
        fontFamily: 'IBMPlexMono Bold',
        fontSize: 12
    }, itemPrice : {
        fontFamily: 'IBMPlexMono SemiBoldItalic',
        fontSize: 8
    }, itemDescription : {
        marginTop: 10,
        fontSize: 10
    }
})

Font.register({
    family: 'IBMPlexMono Regular',
    src: IBMPlexMonoRegular
});

Font.register({
    family: 'IBMPlexMono Bold',
    src: IBMPlexMonoBold
});

Font.register({
    family: 'IBMPlexMono SemiBoldItalic',
    src: IBMPlexSemiBoldItalic
});

const DocumentListItem = ({item}) => {

    const [itemImage, setItemImage] = useState('')
    const service = new Service();

    useEffect(() => {
    service.getImage(item.image)
        .then(
            responce => {
                setItemImage(`data:image/jpeg;base64,${responce.base64}`)
            }
        )
    })

    return <View style={styles.item}>
        <View style={styles.imgContainer}>
            <Image style={styles.img}src={itemImage}></Image>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
    </View>
}

export default DocumentListItem;
