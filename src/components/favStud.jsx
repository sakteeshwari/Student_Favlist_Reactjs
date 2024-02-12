import { useState } from "react"
import { Link } from "react-router-dom"


const FavStudents=()=>{
    // const {listStudents,setlistStudents}=useContext(ListStudent)

    const [favArray,setfavArray]=useState(["one","two"])

    const removeButton=()=>{
        
    }

    return(
        <div>
             <div>
            <div className=" grid grid-cols-2">
                <Link to={"/"}  className=" text-xl text-white bg-red-400 p-3 hover:underline ">List of Students</Link>
                <Link to={"/fav"} className=" text-xl text-white bg-red-400 p-3 hover:underline ">Favorite Students</Link>
                </div>
            <ul>
                {
                    favArray.map((info)=>{
                        return( <li className=" ml-5">{info} <button className=" mt-10 bg-rose-600 text-white rounded-xl" 
                        style={{width:"150px",height:"38px"}} onClick={()=>removeButton()}>Remove</button></li>)
                    })
                }

               
            </ul>
             {/* <h1 className=" text-xl text-white bg-red-400 p-3 hover:underline ">List of Students</h1> */}
        </div>
        </div>
    )
}
export default FavStudents