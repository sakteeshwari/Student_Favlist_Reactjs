import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { FavLists, ListStudent } from "../FavContext"


const FavStudents=()=>{
    
    const { favArray,setfavArray } = useContext(ListStudent)



    // const [favArray,setfavArray]=useState(["one","two"])



    const removeButton=(deletename)=>{

        var deleteItem= favArray.filter((lists)=>{
            // console.log(deleteItem)

        if(lists.name===deletename){
            return false
        }
        else
        {
            return true
        }

          
            // if(deleteName !==lists.favorite)
            // {
            //     return true
            // }
            // else{
            //     return false
            // }
    })
    setfavArray(deleteItem)
       
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
                    favArray.map((info,index)=>{
                        return( <li key={index} className="ml-5 mt-8 text-xl relative">{index+1}. {info.name} 
                        <button className=" bg-rose-600 -mt-1 text-white rounded-xl absolute  left-40" 
                        style={{width:"150px",height:"38px"}} onClick={()=>removeButton(info.name)}>Remove</button></li>)
                    })
                }

               
            </ul>
             {/* <h1 className=" text-xl text-white bg-red-400 p-3 hover:underline ">List of Students</h1> */}
        </div>
        </div>
    )
}
export default FavStudents