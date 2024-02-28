import { createContext } from "react"
import { useState } from "react"


const ListStudent=createContext()

// const FavLists=createContext()

const FavContext=(data)=>{


    const [favArray,setfavArray]=useState([])

   
   

    // const [favArray,setfavArray]=useState(["one","two"])

    return(
        <div>

            <ListStudent.Provider  value={{favArray,setfavArray}}>
                
                {data.children}
            </ListStudent.Provider>

            {/* <FavLists.Provider value={{favArray,setfavArray}}>
            
            </FavLists.Provider> */}

        </div>
    )
}
export default FavContext
export {ListStudent}
// export {FavLists}