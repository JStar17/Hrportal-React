import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import "../Components/AddUser.css";


export const AddUser = () => {
  const userId = useParams().userId;
  const [user, setuser] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Gender, setGender] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [dob, setdateofbirth] = useState("");
  const [Role, setRole] = useState("Employee");
  const [Salary, setSalary] = useState("");
  const [Address, setAddress] = useState("");
  const [Country, setCountry] = useState("");
  const [roleList, setroleList] = useState([]);
  const [photo, setphoto] = useState("");
  const [bankName, setbankName] = useState("");
  const [accountNo, setaccountNo] = useState("");
  const [ifsc, setifsc] = useState("");
  const [panno, setpanno] = useState("");
  const [relativename, setrelativename] = useState("");
  const [relation, setrelation] = useState("");
  const [emnumber, setemnumber] = useState("");

  

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setphoto(reader.result);
    };
  };
  console.log(photo);

  const submit = (e) => {
    e.preventDefault();
    alert("Data saved");
    console.log("ii", e.target.value);

    var data = {
      firstName: FirstName,
      lastName: LastName,
      userName: UserName,
      email: Email,
      gender: Gender,
      mobileNo: MobileNumber,
      dateOfBirth: dob,
      address: Address,
      role: Role,
      salary: Salary,
      country: Country,
      password: Password,
      profile_pic: photo,
      bankName: bankName,
      accountNo: accountNo,
      ifsc: ifsc,
      panno: panno,
      relativename: relativename,
      relation: relation,
      emnumber: emnumber,
    
    };
    axios.post("http://localhost:2000/users", data).then((res) => {
      console.log(res.data);
      
    });
  };
  console.log(bankName,accountNo)
  // var navigate = useNavigate();
  // var auth = localStorage.getItem("email");
  // useEffect(() => {
  //   {
  //     if (!auth) {
  //       navigate("/login");
  //     }
  //   }
  // }, []);

  const getroles = () => {
    axios
      .get("http://localhost:2000/roles")
      .then((res) => {
        console.log(res.data.data);
        setroleList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getroles();
  }, []);
  console.log("this is role",roleList)

  return (
    <div class="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div class="col-lg-12 stretch-card">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Add Employee Details</h4>
                  <form className="form-sample" onSubmit={submit}>
                    <p className="card-description">Employee Details</p>
                    <div className="dropzone-wrapper">
                      <Dropzone
                        className="custom-dropzone"
                        inputContent={<p>Upload Photo</p>}
                        onChangeStatus={handleChangeStatus}
                        accept="image/*"
                      />
                      <img
                        className="userimg"
                        src={user?.profile_pic}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6  ">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            User Name
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="userName"
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Email
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Mobile Number
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="mobileNo"
                              onChange={(e) => setMobileNumber(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Password
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            First Name
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Last Name
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label
                            className="col-sm-3 col-form-label"
                            name="gender"
                          >
                            Gender
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-select"
                              name="gender"
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <option value="">Select</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" name="dob">
                            Date of Birth
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="date"
                              className="form-control"
                              name="dob"
                              onChange={(e) => setdateofbirth(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Role
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-select"
                              name="role"
                              onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="">Select</option>
                              {roleList.map((role) => {
                                return  (
                                  <option value={role._id} key={role._id}>
                                    {role.roleName}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Salary
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="salary"
                              onChange={(e) => setSalary(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="card-description">Address</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Address{" "}
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Country
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-select"
                              name="country"
                              onChange={(e) => setCountry(e.target.value)}
                            >
                              <option value="">Select</option>
                              <option value="India">India</option>
                              <option value="Italy">Italy</option>
                              <option value="Russia">Russia</option>
                              <option value="Britian">Britain</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br></br>

                    <div className="row">
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title"> Bank Details</h4>
                            <p className="card-description"></p>
                            <form className="forms-sample">
                              <div className="form-group">
                                <label htmlFor="exampleInputUsername1">
                                  Bank Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputUsername1"
                                  placeholder="Bank Name"
                                  onChange={(e) => setbankName(e.target.value)}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                  Bank Account Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  placeholder="Account Number"
                                  onChange={(e) => setaccountNo(e.target.value)}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">
                                  ISFC Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="IFSC Code"
                                  onChange={(e) => setifsc(e.target.value)}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputConfirmPassword1">
                                  PAN Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputConfirmPassword1"
                                  placeholder="Pan Number"
                                  onChange={(e) => setpanno(e.target.value)}
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">Emergency Contact</h4>
                            <p className="card-description"></p>
                            <form className="forms-sample">
                              <div className="form-group">
                                <label htmlFor="exampleInputUsername1">
                                  Person's Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputUsername1"
                                  placeholder="Person's Name"
                                  onChange={(e) => setrelativename(e.target.value)}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                  Relationship
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  placeholder="Relationship"
                                  onChange={(e) => setrelation(e.target.value)}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">
                                  Contact Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Number"
                                  onChange={(e) => setemnumber(e.target.value)}
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-icon-text"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
