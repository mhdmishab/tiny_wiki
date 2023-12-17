import { BrowserRouter, Routes,Route } from 'react-router-dom';
import WikiRoute from './routes/WikiRoute';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<WikiRoute/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
