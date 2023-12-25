import axios from "axios"
import { useEffect, useState } from "react"

const UserList=()=>{
const [users,setUsers]= useState([])
const [loading,setLoading] = useState(true)
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> setUsers(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))
    }
    ,[])

    return (
    <div>
        {
            loading ? <h1>wait</h1> : users.map((el,i,t)=> <h2>{el.name}</h2>)
        }
    </div>
)
}

export default UserList