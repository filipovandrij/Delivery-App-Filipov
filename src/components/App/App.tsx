import { Suspense, lazy } from 'react';

import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';

const ShopPage = lazy(() => import('../../pages/ShopPage'));
const ShopCartPage = lazy(() => import('../../pages/ShopCartPage'));

function App() {
    return (
        <div className='App'>
            <Header />
            <Suspense fallback={'load...'}>
                <Routes>
                    <Route path='/' element={<ShopPage />} />
                    <Route path='/shopcart' element={<ShopCartPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
