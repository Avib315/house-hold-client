import React, { createContext, useState, useContext } from 'react';
const UserInfoContext = createContext({});
const UserInfoProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        itemsSelected: [],
        isLoggedIn: false,
    });
    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
};

const useUserInfo = () => {
    return useContext(UserInfoContext);
};

export { UserInfoProvider, useUserInfo };
export default UserInfoContext;