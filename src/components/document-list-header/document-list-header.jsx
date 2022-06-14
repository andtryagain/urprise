import { StyleSheet, Font, View, Text } from '@react-pdf/renderer';

import IBMPlexMonoBold from '../../fonts/IBMPlexMono-Bold.ttf'
import IBMPlexSemiBoldItalic from '../../fonts/IBMPlexMono-SemiBoldItalic.ttf' 


const styles = StyleSheet.create({
    itemHeader: {
        marginLeft: 100
    }, itemTitle : {
        fontFamily: 'IBMPlexMono Bold',
        fontSize: 18
    }, itemID: {
        fontFamily: 'IBMPlexMono SemiBoldItalic',
        fontSize: 14
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

const DocumentListHeader = ({title, id}) => {
    return <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>
            {title}
        </Text>
        <Text style={styles.itemID}>
            {'#'+id}
        </Text>
    </View>
}

export default DocumentListHeader;