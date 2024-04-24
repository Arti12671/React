import React from "react";

const UserContext = React.createContext("Gangadhar"); // default value passed to the user context 

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}
export default UserContext;