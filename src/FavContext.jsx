import { createContext } from "react"
import { useState } from "react"


const ListStudent=createContext()



const FavContext=(data)=>{

    const [listStudents,setlistStudents]=useState([
        { name: "Bharath", favorite: false },
        { name: "Praveen", favorite: false },
        { name: "Kumar", favorite: false },
        { name: "Ramya", favorite: false },
        { name: "Monica", favorite: false }
    ])

    // const [favArray,setfavArray]=useState(["one","two"])

    return(
        <div>

            <ListStudent.Provider value={{listStudents,setlistStudents}}>
                
                {data.children}
            </ListStudent.Provider>

        </div>
    )
}
export default FavContext
export {ListStudent}