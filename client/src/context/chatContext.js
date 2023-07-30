import React, { createContext, useContext, useEffect, useState } from "react";


const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {

    return (
        <ChatContext.Provider
          value={{
            
          }}
        >
          {children}
        </ChatContext.Provider>
      );
};

