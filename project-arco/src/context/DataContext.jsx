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
      sex: "Female", 
      age: "3", 
      Introduction:"I love taking a shower. If you become my family, you don't need to worry about the shower.",
      img: "matching1.jpg",
      expose: "yes",
      neutralization: "X"},
    { name: "Poppi", 
      sex: "Male", 
      age: "5", 
      Introduction:"Everyone says my smile is really great. I smile everyday because I love people.",
      img: "matching2.jpg",
      expose: "yes",
      neutralization: "X"},
    { name: "Ellie", 
      sex: "Female", 
      age: "4", 
      Introduction:"I'm smart and really good at playing a catch game. I'll never let you get bored.",
      img: "matching3.jpg",
      expose: "yes",
      neutralization: "X"},
    { name: "Happy", 
      sex: "Female", 
      age: "2", 
      Introduction:"",
      img: "matching4.jpg",
      expose: "no",
      neutralization: "X"},
    { name: "Coco", 
      sex: "Male", 
      age: "7", 
      Introduction:"",
      img: "matching5.jpg",
      expose: "no",
      neutralization: "X"},
    { name: "Marry", 
      sex: "Female", 
      age: "9", 
      Introduction:"",
      img: "matching6.jpg",
      expose: "no",
      neutralization: "X"},
    { name: "Vivi", 
      sex: "Male", 
      age: "11", 
      Introduction:"",
      img: "matching7.jpg",
      expose: "no",
      neutralization: "X"},
    { name: "Bobi", 
      sex: "F", 
      age: "1", 
      Introduction:"",
      img: "matching8.jpg",
      expose: "no",
      neutralization: "X"},
      
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