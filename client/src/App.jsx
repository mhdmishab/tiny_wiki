import { BrowserRouter, Routes,Route } from 'react-router-dom';
import WikiRoute from './routes/WikiRoute';
import AdminRoute from './routes/AdminRoute';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<WikiRoute/>}/>
                    <Route path="/admin/*" element={<AdminRoute/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
