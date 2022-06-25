import { StyleSheet, Font, View, Text } from '@react-pdf/renderer'

import dateFormat from 'dateformat'

import UbuntuMonoRegular from '../../fonts/UbuntuMono-R.ttf'
import UbuntuMonoRegularItalic from '../../fonts/UbuntuMono-RI.ttf'
import UbuntuMonoBold from '../../fonts/UbuntuMono-B.ttf'

const styles = StyleSheet.create({
    itemHeader: {
        marginLeft: 100
    }, itemTitle: {
        fontFamily: 'UbuntuMono Bold',
        fontSize: 28
    }, itemID: {
        fontFamily: 'UbuntuMono Regular Italic',
        fontSize: 20
    }, itemCreatedAt: {
        fontFamily: 'UbuntuMono Regular',
        fontSize: 14
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

const DocumentListHeader = ({ title, id, created }) => {
    return <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>
            {title}
        </Text>
        <Text style={styles.itemID}>
            {'#' + id}
        </Text>
        <Text style={styles.itemCreatedAt}>
            {'created at: ' + dateFormat(created, 'HH:MM dd-mm-yyyy')}
        </Text>
    </View>
}

export default DocumentListHeader;