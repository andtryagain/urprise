import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home-page';
import CreatePage from '../pages/create-page';
import ListView from '../list-view';
import DocumentList from '../document-list';

const App = () => {
    return <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/create' element={<CreatePage />} />
        
        <Route path='/list/:id'  
                element={<ListView />}
        />
        <Route path='/document/:id'
                element={<DocumentList />}
        />
    </Routes>
};

export default App;
