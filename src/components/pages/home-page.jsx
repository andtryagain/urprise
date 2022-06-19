import Header from '../page-decorator/header';
import Content from '../page-decorator/content';
import Footer from '../page-decorator/footer';

import Slider from '../slider';
import Instruction from '../instruction/';

const items = [
    {emoji: '👻', header: 'anonymosly', description: 'we do not collect your data'},
    {emoji: '💌', header: 'simple', description: 'make it easier on your partner'},
    {emoji: '🛑', header: 'no add', description: 'without intrusive advertising'},
    {emoji: '📝', header: 'save & share', description: 'save your list as pdf'}
    
]

const HomePage = () => {
    return (
        <>
            <Header button />
            <Content>
                <h1>create & share your wishlists</h1>
                <Slider items={items}/>
                <Instruction />
            </Content>
            <Footer />
        </>
    );
}

export default HomePage;