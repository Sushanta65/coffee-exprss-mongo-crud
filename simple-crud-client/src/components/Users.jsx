import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const userLoaderData = useLoaderData()
    const [users, setUsers] = useState(userLoaderData)

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <User key={user._id} user={user} users={users} setUsers={setUsers}></User>)
                }
            </ul>
        </div>
    );
};

export default Users;