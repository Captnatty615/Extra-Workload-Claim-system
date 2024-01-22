import { createContext, useState, useContext } from "react"

const StateContext = createContext({
    currentUser: {},
    setCurrentUser: () => { },
    userToken: 'null',
    setUserToken: () => { },
    userRole: {},
    setUserRole: () => { }
})

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userRole, setUserRole] = useState({})
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem('TOKEN', token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token);
    }
    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userRole,
            setUserRole,
            userToken,
            setUserToken}}>
            {children}
        </StateContext.Provider>
    )
}

export const UserStateContext = () => useContext(StateContext)