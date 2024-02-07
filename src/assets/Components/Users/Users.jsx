import React, {useState, useEffect} from 'react'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data)=>setUsers(data))
    }, [])


    return (
        <div>
            <h2>Los usuarios son: </h2>
            <ul>
                {users.map(u => (
                    <li key={u.id}>
                        {u.name}-
                        {u.username}
                    </li>
                ))}
            </ul>

        </div>
        )
    }

export default Users
