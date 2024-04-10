import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./addStudent.css";

const AddStudent = () => {
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
    });
    const {
        firstName,
        lastName,
        email,
        department,
    } = student;

    const handleInputChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };
    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post(
            "http://localhost:8080/students",
            student
        );
        navigate("/view-students");
    };

    return (
        <div className="container mt-5">
            <div className="col-sm-8 offset-sm-2 mt-3 pt-2 pb-2 px-5 shadow">
                <h2 className="mt-5"> Add Student</h2>
                <form onSubmit={(e) => saveStudent(e)}>
                    <div className="form-group mb-5">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            id="firstName"
                            required
                            value={firstName}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>

                    <div className="form-group mb-5">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            id="lastName"
                            required
                            value={lastName}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>

                    <div className="form-group mb-5">
                        <label htmlFor="email">Your Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>

                    <div className="form-group mb-5">
                        <label htmlFor="department">Department</label>
                        <input
                            className="form-control"
                            type="text"
                            name="department"
                            id="department"
                            required
                            value={department}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>

                    <div className="row mb-5">
                        <div className="col-sm-6">
                            <button
                                type="submit"
                                className="btn btn-success btn-lg btn-block">
                                Save
                            </button>
                        </div>

                        <div className="col-sm-6">
                            <Link
                                to={"/view-students"}
                                className="btn btn-warning btn-lg btn-block">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
