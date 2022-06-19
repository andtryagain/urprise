import ButtonToForm from '../button-to-form';
import Lists from '../lists';
import Content from '../page-decorator/content';
import Footer from '../page-decorator/footer';

import Header from '../page-decorator/header';

const CreatePage = () => {
    return (
    <>
        <Header />
        <Content>
            <ButtonToForm />
            <Lists />
        </Content>        
        <Footer />
    </>
    );
}

export default CreatePage;