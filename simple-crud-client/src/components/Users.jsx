import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const userLoaderData = useLoaderData()
    const [users, setUsers] = useState(userLoaderData)

    return (
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    );
};

export default Users;