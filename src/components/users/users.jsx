import axios from "axios";
import React, { useEffect, useState } from "react";
import Rolling from "@img/rolling.svg"
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false); 
            })
            .catch((err) => {
                console.log(err);
                setLoading(false); 
            });
    }, []); 
    
  if (loading) {
      return (
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
              <img src={Rolling} alt="Loading..." />
          </h3>
      );
  }

    return (
        <div className="users">
            <table className="table table-bordered table-hover table-striped overflow-x-auto table-primary">
                <thead>
                    <tr>
                        <th>T/R</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.street}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
