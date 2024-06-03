// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Rolling from "@img/rolling.svg";

// const Users = () => {
//     const [todos, setTodos] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios
//             .get("https://jsonplaceholder.typicode.com/todos?_limit=12")
//             .then((response) => {
//                 setTodos(response.data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <h3 style={{ textAlign: "center", marginTop: "20px" }}>
//                 <img src={Rolling} alt="Loading..." />
//             </h3>
//         );
//     }

//     return (
//         <div className="todos">
//             <table className="table table-bordered table-hover table-striped overflow-x-auto table-primary">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Title</th>
//                         <th>Completed</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {todos.map((item) => (
//                         <tr key={item.id}>
//                             <td>{item.id}</td>
//                             <td>{item.title}</td>
//                             <td>{item.completed ? "Yes" : "No"}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Users;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Rolling from "@img/rolling.svg";

const Users = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [editingTitle, setEditingTitle] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((response) => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const deleteTodo = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => {
                setTodos(todos.filter((todo) => todo.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const startEditing = (id, currentTitle) => {
        setEditingId(id);
        setEditingTitle(currentTitle);
    };

    const saveEdit = (id) => {
        axios
            .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                title: editingTitle,
                completed: todos.find((todo) => todo.id === id).completed,
            })
            .then((response) => {
                setTodos(
                    todos.map((todo) => (todo.id === id ? response.data : todo))
                );
                setEditingId(null);
                setEditingTitle("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (loading) {
        return (
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                <img src={Rolling} alt="Loading..." />
            </h3>
        );
    }

    return (
        <div className="todos">
            <table className="table table-bordered table-hover table-striped overflow-x-auto table-primary">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                {editingId === item.id ? (
                                    <input
                                        className="form-control w-50"
                                        type="text"
                                        value={editingTitle}
                                        onChange={(e) =>
                                            setEditingTitle(e.target.value)
                                        }
                                    />
                                ) : (
                                    item.title
                                )}
                            </td>
                            <td>{item.completed ? "Yes" : "No"}</td>
                            <td>
                                {editingId === item.id ? (
                                    <button
                                        className="btn btn-success m-1"
                                        onClick={() => saveEdit(item.id)}>
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-info m-1"
                                        onClick={() =>
                                            startEditing(item.id, item.title)
                                        }>
                                        Edit
                                    </button>
                                )}
                                <button
                                    className="btn btn-danger m-1"
                                    onClick={() => deleteTodo(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
