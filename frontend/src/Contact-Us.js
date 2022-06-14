import React, { Component } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

const styleP = { display: "block" }
const inputStyle = { display: "flex", marginRight: "10px" }


const ContactUs = (props) => {
    return (

        <Formik
            initialValues={{ customerName: "", email: "", phoneNumber: "", message: "" }}

            validationSchema={Yup.object(
                {
                    customerName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .matches(/^[A-Za-z]+$/, "First name can only contain alphabets!")
                        .required('Please enter the name!'),

                    email: Yup.string()
                        .email("Enter the valid email")
                        .required("Please enter the email!"),

                    phoneNumber: Yup.string()
                        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter a valid phone number")
                        .required("Please Enter the number"),

                    message: Yup.string()
                        .min(10, "Message must contain at least 10 characters")
                        .max(1200, "Message must be below 1200 characters")
                        .required("Please enter the message to deliver")
                }
            )
            }

            onSubmit={
                (values) => {
                    alert(JSON.stringify(values, null, 2));
                }
            }
        >
            
            {
                (props) => (
                    <form onSubmit={props.handleSubmit}>
                        <h2 style={{ display: "flex", justifyContent: "center" }}>Contact Us</h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div >

                                <div id='firstRow' style={inputStyle}>
                                    <div className='inputField' style={{ marginRight: "10px" }}>
                                        <p style={styleP}>First Name:</p>
                                        <Field name="customerName"  type="text" />
                                        <ErrorMessage name="customerName" component={"div"}/>
                                    </div>
                                    <div className='inputField'>
                                        <p style={styleP}>Email:</p>
                                        <Field type="text" name="email" />
                                        <ErrorMessage name="email" component={"div"}/>
                                    </div>
                                </div>

                                <div id='secondRow'>
                                    <div className='inputField'>
                                        <p style={styleP}>Phone:</p>
                                        <Field type="text" name="phoneNumber" />
                                        <ErrorMessage name="phoneNumber" component={"div"}/>
                                    </div>
                                </div>

                                <div id='thirdRow'>
                                    <div className='inputField'>
                                        <p style={styleP}>Message:</p>
                                        <textarea type="text" name="message" id="message" style={{ height: "200px", width: "500px" }} onChange={props.handleChange} onBlur={props.handleBlur} />
                                        <ErrorMessage name="message" component={"div"}/>
                                    </div>
                                </div>

                                <div id='fourthRow' style={{ marginTop: "10px" }}>
                                    <div className='inputField'>
                                        <button type='submit' disabled={props.isValid==false} style={{ backgroundColor: "black", color: "white" }}>SEND</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                )
            }
        </Formik>


    );
}

export default ContactUs;