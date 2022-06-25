import { StyleSheet, Font, View, Text } from '@react-pdf/renderer'

import dateFormat from 'dateformat'

import IBMPlexMonoBold from '../../fonts/IBMPlexMono-Bold.ttf'
import IBMPlexSemiBoldItalic from '../../fonts/IBMPlexMono-SemiBoldItalic.ttf'


const styles = StyleSheet.create({
    itemHeader: {
        marginLeft: 100
    }, itemTitle: {
        fontFamily: 'IBMPlexMono Bold',
        fontSize: 18
    }, itemID: {
        fontFamily: 'IBMPlexMono SemiBoldItalic',
        fontSize: 14
    }, itemCreatedAt: {
        fontFamily: 'IBMPlexMono SemiBoldItalic',
        fontSize: 12
    }
})

Font.register({
    family: 'IBMPlexMono Bold',
    src: IBMPlexMonoBold
});

Font.register({
    family: 'IBMPlexMono SemiBoldItalic',
    src: IBMPlexSemiBoldItalic
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