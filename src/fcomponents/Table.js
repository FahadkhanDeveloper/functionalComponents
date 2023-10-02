import axios from 'axios'
import React, {useState,useEffect} from 'react'
const Table = () => {
    const [users,setUsers] = useState([])
    // useState and useEffect are functions useEffect will be called when first time page load
    useEffect(() => {
        const loadData = async () => {
            const {data} = await axios.get("https://api.github.com/users")
            // console.log(data)
            setUsers(data)
        }
        loadData()
    },[users])
    // above array is dependencies array if we give [] empty array then this useEffect will be render 1 time
    // if we does not give dependencies array then this useEffect will run infinite time
    // if we give state name in this array then useEffect will run after state is changed and it will not run infinite time
    
    return(
        <div>
            <ul>
                {users.map((user) => <li key={user.id}>{user.login}</li>)}
            </ul>
        </div>
    )
}
export default Table