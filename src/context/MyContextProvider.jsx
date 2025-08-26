
import { useState } from 'react';
import { MyContext } from './MyContext';

export const MyContextProvider = ({ children }) => {
      const [myState, setMyState] = useState(null); 

      const contextValue = {
        myState,
        setMyState,
      };

      return (
        <MyContext.Provider value={contextValue}>
          {children}
        </MyContext.Provider>
      );
    }