/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const User = ({ user, users, setUsers }) => {
 
    

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });

        fetch(`http://localhost:5200/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaningUsers = users.filter(user => user._id !== id)
              setUsers(remaningUsers)
            }
          });
      }
    });
  };
  return (
    <li>
      {user.name} --
      {user.email} --
      {user.userCreatedAt}
      <button>Update</button>
      <button onClick={() => handleDelete(user._id)}>Delete</button>
    </li>
  );
};

export default User;
