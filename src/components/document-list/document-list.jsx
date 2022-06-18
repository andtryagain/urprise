import { StyleSheet, PDFViewer, Document, Page } from '@react-pdf/renderer';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

import DocumentListHeader from '../document-list-header';
import DocumentListItem from '../document-list-item';

import './style.css';

const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})

const DocumentList = ({lists}) => {

    const { id } = useParams();
    const documentList = lists.find(x => x.id === id)
    const { title, items } = documentList 

    const listItems = items.map(
        (item, index) => {
            return <DocumentListItem key={index} item={item} />
        }
    )

    return (
        <PDFViewer className='viewer'>
            <Document>
                <Page size="A4" style={styles.page}>
                    <DocumentListHeader 
                        title={title} 
                        id={id}/>
                    {listItems}
                </Page>
            </Document>
        </PDFViewer>
    )
};

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
};

export default connect(mapStateToProps)(DocumentList)
