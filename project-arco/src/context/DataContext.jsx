import { createContext, useState } from "react";

// useContext
const DataContext = createContext();


// 컴포넌트
const DataProvider = ({children}) => {
  // 유저 정보
  const [user, setUser] = useState(null)
  // 사용할 value값을 state와 action으로 분리해서 넣어둠
  const value = {
    state: {user},
    action: {setUser}
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}


export {DataProvider};
export default DataContext;