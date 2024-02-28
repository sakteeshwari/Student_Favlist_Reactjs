
import { useContext } from "react"

import { ListStudent } from "../FavContext"
// import FavStudents from "./favStud"
import { Link } from "react-router-dom"
import { useState } from "react"


const ListOfStudents = () => {

    const { favArray,setfavArray } = useContext(ListStudent)

    // const [clicked, setClicked] = useState(false);

    const [listStudents,setlistStudents]=useState([
        {id:1, name: "Bharath",favorite:false},
        {id:2, name: "Praveen",favorite:false},
        {id:3, name: "Kumar",favorite:false},
        {id:4, name: "Ramya",favorite:false},
        {id:5, name: "Monica",favorite:false}
    ])

    const handleChange = (name) => {

        
        const isAlreadyAdded = favArray.some((student) => student.name === name);
        if (!isAlreadyAdded) {
            // Add the name to the favorites list
            setfavArray([...favArray, { name }]);

            const temp = listStudents?.map(item => {
                if (item.name === name) {
                    item.favorite = !item.favorite
                }
                return item;
            })
    
            setlistStudents(temp)


        
        }

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
                        return (<div className="" key={index}>
                            <li className="ml-5 mt-8 text-xl relative"
                                style={{ minWidth: "100px" }}> {index + 1}. {data.name}
                                <button type="button" className={data.favorite ? 
                                "opacity-5  bg-black ml-10 text-ellipsis -mt-1 text-white rounded-xl absolute left-40" 
                                : "bg-black ml-10 text-ellipsis -mt-1 text-white rounded-xl absolute left-40"}
                                    style={{ width: "150px", height: "38px" }} onClick={() => handleChange(data.name)}>
                                    Add to Favorite</button> </li>
                        </div>)
                    })
                }




            </ul>
        </div>
    )
}
export default ListOfStudents;
