import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../FormValidation.css';
import addButton from '../../Asstes/Images/Group 39.png';
import deleteButton from '../../Asstes/Images/Group 5.png';
import { Link } from "react-router-dom";

const FormValidation = () => {

    const [userInfo, setUserInfo] = useState([{info: ''}]);
    console.log(userInfo);
    const handleAdd=()=>{
        setUserInfo([...userInfo ,{info:''}])

    }

    const handleDelete = (Index)=>{
        const list = [...userInfo];
        list.splice(Index, 1);
        setUserInfo(list);
    }

    const handleChange = (e, Index)=>{
        const {name, value}=e.target;
        const list = [...userInfo];
        list[Index][name]=value;
        setUserInfo(list);
    }

    

    
    return (
    <section className='mt-5'>
        <div className='formPageStyle mx-auto'>
            {userInfo?.map((singleInfo, Index)=>(
                <div key={Index}>
                    <Form >
                    <Form.Group className="formStyle my-3" controlId="formBasicEmail"> 
                        <Form.Control type="text" placeholder="User Name" name='userName' value={singleInfo.userName} onChange = {(e)=>handleChange(e,Index)} className='formBorderStyle' required/>
                        <Form.Control type="password" placeholder="Password" name='Password' value={singleInfo.Password} onChange = {(e)=>handleChange(e,Index)}  className='formBorderStyle' required/>
                        <Form.Control type="text" placeholder="Phone" name='Phone' value={singleInfo.Phone} onChange = {(e)=>handleChange(e,Index)}  className='formBorderStyle' required/>
                        <Form.Control type="email" placeholder="Enter email" name='Email' value={singleInfo.Email} onChange = {(e)=>handleChange(e,Index)}  className='formBorderStyle' required />  
                        <div className='BtnStyle' onClick={()=>{handleDelete(Index)}}>
                            <img className='imgStyle bg-danger' src={deleteButton} alt='delete Button'/>
                        </div>
                    </Form.Group>
                    </Form>
                    
                </div>
            ))}

            <div className=' mt-5' >
                <img onClick={handleAdd} className='imgStyle bg-primary' src={addButton} alt='add Button'/>
                <span className='ps-3'>Add More</span>
            </div>
        
            <hr></hr>
            <div className='justify-content-end g-3 d-flex'>
                <Button variant="none" className='text-primary fw-bold ' type="submit">
                    Import
                </Button>
                <Button variant="primary" >
                    <Link  className='fw-bold text-white text-decoration-none' to="/userInfo" >Submit</Link>
                </Button>
            </div>
        </div>    

        <div className='w-75 mx-auto mt-5'>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">user Name</th>
                    <th scope="col">Password</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
            </table>
            {
                userInfo?.map((singleInfo, Index)=>
                     
                    <div>
                        <table class="table">
                            
                            <tbody >
                                <tr className='text-start justify-content-between align-item-center d-flex'>
                                <td>{singleInfo.userName}</td>
                                <td>{singleInfo.Password}</td>
                                <td>{singleInfo.Phone}</td>
                                <td>{singleInfo.Email}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                )
            }
            {/* {
                userInfo.map((singleInfo, Index)=><ul className='d-flex justify-content-between align-item-center w-75 mx-auto mt-5  '>
                    <li className='listStyleNone'>{singleInfo.userName }</li>
                    <li className='listStyleNone'>{singleInfo.Password }</li>
                    <li className='listStyleNone'>{singleInfo.Phone }</li>
                    <li className='listStyleNone'>{singleInfo.Email }</li>

                </ul>)
            } */}
        </div>
    </section>
    );
};

export default FormValidation;