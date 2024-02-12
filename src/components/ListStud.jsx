
import { useContext } from "react"

import { ListStudent } from "../FavContext"
import FavStudents from "./favStud"
import { Link } from "react-router-dom"
import { useState } from "react"

const ListOfStudents = () => {

    const { listStudents, setlistStudents } = useContext(ListStudent)


    // const[addItem,setaddItem]=useState(ListStudent)

    // setlistStudents(deleteItem)
    // console.log(addItem)
    

    console.log(listStudents)
    console.log(setlistStudents)

    // const [buttonClicked,setbuttonClicked]=useState(false)
    // console.log(buttonClicked)
    // var updateList=[...listStudents]
    const handleChange = (name) => {

        const newStudent={name:name,favorite:false}

        setlistStudents([...listStudents,newStudent])
        // updateList.favorite=true;

        // setlistStudents([...listStudents,addItem])

    }


    return (
        <div>
            <div className=" grid grid-cols-2">

                <Link to={"/"} className=" text-xl text-white bg-red-400 p-3 hover:underline ">
                    List of Students</Link>

                <Link to={"/fav"} className=" text-xl text-white bg-red-400 p-3 hover:underline ">
                    Favorite Students</Link>

            </div>


            <ul>
                {
                    listStudents.map((data, index) => {
                        return (<div className="">
                            <li key={index} className="ml-5 mt-8 text-xl relative"
                                style={{ minWidth: "100px" }}> {index + 1}. {data.name}
                                <button type="button" className=" bg-black ml-10 text-ellipsis -mt-1
                              text-white rounded-xl absolute left-40"
                                    style={{ width: "150px", height: "38px" }} onClick={()=>handleChange(data.name)}>Add to Favorite</button> </li>
                        </div>)
                    })
                }




            </ul>
        </div>
    )
}
export default ListOfStudents