import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import "../Components/AddUser.css";

export const UpdateEmp = () => {
  const userId = useParams().userId;
  const [user, setuser] = useState("");
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [role, setrole] = useState("");
  const [salary, setsalary] = useState("");
  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [photo, setphoto] = useState("");
  const [bankName, setbankName] = useState("");
  const [accountNo, setaccountNo] = useState("");
  const [ifsc, setifsc] = useState("");
  const [panno, setpanno] = useState("");
  const [relativename, setrelativename] = useState("");
  const [relation, setrelation] = useState("");
  const [emnumber, setemnumber] = useState("");
  const [Role, setRole] = useState('');
  const [roleList, setroleList] = useState([]);
  
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


  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setphoto(reader.result);
    };
  };
  console.log(photo);

  const getusers = () => {
    axios
      .get(`http://localhost:2000/users/${userId}`)
      .then((res) => {
        console.log(res.data.data);
        setuser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getusers();
  }, []);
  console.log("user update", user);

  const submit = (e) => {
    e.preventDefault();
    alert("data updated");
    var data = {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      gender: gender,
      mobileNo: mobileNo,
      dateOfBirth: dateOfBirth,
      address: address,
      role: role,
      salary: salary,
      password: password,
      email: email,
      country: country,
      profile_pic: photo,
    };
    axios
      .put(`http://localhost:2000/users/${userId}`, data)
      .then((res) => {
        console.log(res.data.data);
        console.log("User Updated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  var navigate = useNavigate();
  var auth = localStorage.getItem("email");
  useEffect(() => {
    {
      if (!auth) {
        navigate("/login");
      }
    }
  }, []);

  console.log("User", user);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="content-wrapper">
      <div className="row">
        <div class="col-lg-12 stretch-card">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Update User Details</h4>
                <form className="form-sample" onSubmit={submit}>
                  <p className="card-description">Personal info</p>
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
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          User Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            name="userName"
                            defaultValue={user.userName}
                            onChange={(e) => setuserName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            defaultValue={user.email}
                            onChange={(e) => setemail(e.target.value)}
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
                            defaultValue={user.mobileNo}
                            onChange={(e) => setmobileNo(e.target.value)}
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
                            defaultValue={user.password}
                            onChange={(e) => setpassword(e.target.value)}
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
                            defaultValue={user.firstName}
                            onChange={(e) => setfirstName(e.target.value)}
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
                            defaultValue={user.lastName}
                            onChange={(e) => setlastName(e.target.value)}
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
                            className="form-control"
                            name="gender"
                            defaultValue={user.gender}
                            onChange={(e) => setgender(e.target.value)}
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
                        <label
                          className="col-sm-3 col-form-label"
                          name="dateOfbirth"
                        >
                          Date of Birth
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="date"
                            className="form-control"
                            defaultValue={user.dateOfBirth}
                            name="dateofBirth"
                            onChange={(e) => setdateOfBirth(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Role</label>
                        <div className="col-sm-9">
                        <select
                              className="form-select"
                              name="role"
                              onChange={(e) => setRole(e.target.value)}
                            >
                              {roleList.map((role) => {
                                return (
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
                            defaultValue={user.salary}
                            name="salary"
                            onChange={(e) => setsalary(e.target.value)}
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
                          Address 1
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            defaultValue={user.address}
                            onChange={(e) => setaddress(e.target.value)}
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
                            className="form-control"
                            defaultValue={user.country}
                            onChange={(e) => setcountry(e.target.value)}
                          >
                            <option>Select</option>
                            <option>India</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
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
                                  defaultValue={user.bankName}

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
                                  defaultValue={user.accountNo}
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
                                  defaultValue={user.ifsc}
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
                                  defaultValue={user.panno}
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
                                  defaultValue={user.relativename}
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
                                  defaultValue={user.relation}
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
                                  defaultValue={user.emnumber}
                                  onChange={(e) => setemnumber(e.target.value)}
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div>
                    <button type="submit" class="btn btn-primary btn-icon-text">
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
  );
};
