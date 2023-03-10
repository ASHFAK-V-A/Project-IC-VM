import React from "react";
import "./Form.css";

function Form({ register, handleSubmit, onSubmit, errors }) {
  console.log(register);
  return (
    <div>
      <div className="image-box">
        <div className="body">
          <div className="col-10 col-md-8">
            <div className="login">
              <form
                className="needs-validation"
                onSubmit={handleSubmit(onSubmit)}
              >
                <section>
                  <div className="row">
                    <div className=" col-12 col-md-6">
                      <div className="form-group was-validated mb-2">
                        <label className="form-label fs-6" htmlFor="username">
                          Username
                        </label>
                        <input
                          className="form-control"
                          style={{
                            borderColor: "black",
                            backgroundImage: "none",
                          }}
                          {...register("name", {
                            required: "Username is requried",
                            minLength: {
                              value: 3,
                              message:
                                "Username must be atleast 3 characters long",
                            },
                            maxLength: {
                              value: 13,
                              message:
                                "Username must be almost 13 characters long",
                            },
                          })}
                          name="name"
                          placeholder="Username"
                        />
                        <small style={{ color: "red" }} className="fs-6">
                          {errors.name?.message}
                        </small>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group was-validated ">
                        <label className="form-label fs-6" htmlFor="Email">
                          Email
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Email must be valid",
                            },
                          })}
                          style={{
                            borderColor: "black",
                            backgroundImage: "none",
                            paddingRight: 0,
                          }}
                        />
                        <p style={{ color: "red" }} className="fs-6">
                          {errors.email?.message}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group was-validated  mt-3 mb-2">
                          <label
                            className="form-label fs-6"
                            htmlFor="company_name"
                          >
                            Company Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Company Name"
                            {...register("company_name", {
                              required: "Company Name is required",
                            })}
                            style={{
                              borderColor: "black",
                              backgroundImage: "none",
                              paddingRight: 0,
                            }}
                          />
                          <p style={{ color: "red" }} className="fs-6">
                            {errors.company_name?.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 mt-3">
                        <div className="form-group was-validated ">
                          <label className="form-label fs-6" htmlFor="phone">
                            Phone
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            id="phonenumber"
                            placeholder="Phone Number"
                            {...register("phone_number", {
                              required: "Phone Number is required",
                              pattern: {
                                value: /^\d{10,}$/g,
                                message: "Contain 10 digits",
                              },
                              maxLength: {
                                value: 10,
                                message: "Phone Not Valid",
                              },
                            })}
                            style={{
                              borderColor: "black",
                              backgroundImage: "none",
                              paddingRight: 0,
                            }}
                          />
                          <p style={{ color: "red" }} className="fs-6">
                            {errors.phone_number?.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group was-validated  mt-3 mb-2">
                        <label
                          className="form-label fs-6"
                          htmlFor="Requirement"
                        >
                          Requirement
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Requirment"
                          {...register("Requirment", {
                            required: "Requirement is required",
                          })}
                          style={{
                            borderColor: "black",
                            backgroundImage: "none",
                            paddingRight: 0,
                          }}
                        />
                        <p style={{ color: "red" }} className="fs-6">
                          {errors.Requirment?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group was-validated mt-3 ">
                        <label
                          className="form-label fs-6"
                          htmlFor="lead_types_id"
                        >
                          lead_types_id
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("lead_types_id")}
                          readOnly
                          style={{
                            borderColor: "black",
                            backgroundImage: "none",
                            paddingRight: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <input type="submit" className="btn btn-primary w-100" />
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
