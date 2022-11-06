import { createContext, useState } from "react";

// useContext
const DataContext = createContext();


// 컴포넌트
const DataProvider = ({children}) => {
  // 유저 정보
  const [user, setUser] = useState(null)

  // 유기동물 정보
  const [animal, setAnimal] = useState ([
    { name: "Jarry", 
      sex: "F", 
      age: "3", 
      Introduction:"I love taking a shower. If you become my family, you don't need to worry about the shower.",
      img: "matching1.jpg"},
    { name: "Poppi", 
      sex: "M", 
      age: "5", 
      Introduction:"Everyone says my smile is really great. I smile everyday because I love people.",
      img: "matching2.jpg"},
    { name: "Ellie", 
      sex: "F", 
      age: "4", 
      Introduction:"I'm smart and really good at playing a catch game. I'll never let you get bored.",
      img: "matching3.jpg"},
  ])

  // 사용할 value값을 state와 action으로 분리해서 넣어둠
  const value = {
    state: {user, animal},
    action: {setUser, setAnimal}
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}


export {DataProvider};
export default DataContext;