import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubsrcibed = auth.onAuthStateChanged((user) => {
            console.log({ user })
            if (user) {
                const { displayName, uid, email, photoURL } = user
                setUser({ displayName, uid, email, photoURL })
                setIsLoading(false)
                navigate('/')
                return
            }

            navigate('/login')
        })

        // Clean-up function
        return () => unsubsrcibed()
    }, [navigate])

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
