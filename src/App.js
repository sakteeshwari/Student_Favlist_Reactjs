import FavContext, { FavLists } from "./FavContext"
import { ListStudent } from "./FavContext"
import ListOfStudents from "./components/ListStud"
import FavStudents from "./components/favStud"
import {BrowserRouter, Route, Routes} from 'react-router-dom'




const App=()=>{

  return(
    <>
      
        <FavContext>
          <BrowserRouter>
          
          <Routes>
             <Route path="/" element={<ListOfStudents/>}></Route>
             <Route path="/fav" element={<FavStudents></FavStudents>}></Route>
          </Routes>
          </BrowserRouter>
        </FavContext>
        
       
    </>
  )
}
export default App
