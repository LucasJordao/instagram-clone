import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed';
import Login from './pages/Login';
import Register from './pages/Register';


export default function AppRouter(){

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/> 
                <Route path='/register' element={<Register />}/> 
                <Route path='/' element={<Feed />}/>
            </Routes>
        </Router>
    );
}