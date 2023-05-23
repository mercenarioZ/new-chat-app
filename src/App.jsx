import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chatroom from './components/Chatroom'
import AuthProvider from './context/AuthProvider'

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<Login />} path='/login' />
                    <Route element={<Chatroom />} path='/' />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
