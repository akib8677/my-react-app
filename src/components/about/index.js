import React, { useState, useEffect, Fragment } from 'react';
import { AiOutlineRight, AiFillEdit, AiFillEye, AiOutlineCheck } from "react-icons/ai";
import { insData } from '../shared/data/data';
import { getprofiles, updateProfile } from '../service/profile';
import './index.css';

const About = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    name: insData?.name || '',
    role: insData?.role || '',
    birthday: insData?.birthday || '',
    website: insData.website || '',
    phone: insData?.phone || '',
    city: insData?.city || '',
    age: insData?.age || '',
    degree: insData?.degree || '',
    email: insData?.email || '',
    freelance: insData?.freelance || ''
  });

  useEffect(() => {
    getprofiles().then((p) => {
      if (p) {
        // setData(p)
        console.log(p)
      }
    })
  }, []);

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  function editText() {
    setLoading(!loading)
  }

  function save() {
    updateProfile(data).then((p) => {
      if (p) {
        setData(data)
      }
    })
    setLoading(false);
  }

  return (
    <Fragment>
      <div className="container shadow my-4">
        <div className='d-flex'>
          <div>
            <h1><span className='uderline'>About</span></h1>
            <p className='mt-2'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className='d-flex mt-3'>
            <div><button type="button" className="btn btn-success mx-2" onClick={editText}>{loading ? <AiFillEdit size={20} /> : <AiFillEye size={20} />}</button></div>
            <div><button type="button" className="btn btn-primary" onClick={save}><AiOutlineCheck size={20} /></button></div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="/profile_img.jpg" className="img-fluid" alt="image" />
          </div>
          <div className="col-8">
            <div className='mx-2'>
              <h1><input type="text" id="name" name='name' value={data.name} onChange={handleChange} className={`input-group-lg  fs-3 ${loading ? 'bg-white' : ''}`} disabled={loading} /></h1>
              <h3><input type="text" id="role" name='role' value={data.role} onChange={handleChange} className={`input-group-lg  fs-4 ${loading ? 'bg-white' : ''}`} disabled={loading} /></h3>
            </div>
            <div className='row '>
              <div className="col">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex mt-2">
                    <p className='fw-bold'><AiOutlineRight /> Birthday:</p>
                    <span><input type="text" id="birthday" name='birthday' value={data.birthday} onChange={handleChange} className={`${loading ? 'bg-white' : ''}`} disabled={loading} /></span>
                  </li>
                  <li className="list-group-item d-flex">
                    <p className='fw-bold'><AiOutlineRight /> Website:</p>
                    <span><input type="text" id="website" name='website' value={data.website} onChange={handleChange} className={`${loading ? 'bg-white' : ''}`} disabled={loading} /></span>
                  </li>
                  <li className="list-group-item d-flex">
                    <p className='fw-bold'><AiOutlineRight /> Phone:</p>
                    <span><input type="text" id="phone" name='phone' value={data.phone} onChange={handleChange} className={`${loading ? 'bg-white' : ''}`} disabled={loading} /></span>
                  </li>
                  <li className="list-group-item d-flex">
                    <p className='fw-bold'><AiOutlineRight /> City:</p>
                    <span><input type="text" id="city" name='city' value={data.city} onChange={handleChange} className={`${loading ? 'bg-white' : ''}`} disabled={loading} /></span>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex">
                    <p className='fw-bold'><AiOutlineRight /> Age:</p>
                    <span><input type="text" id="age" name='age' value={data.age} onChange={handleChange} className={`${loading ? 'bg-white' : ''}`} disabled={loading} /></span>
                  </li>
                  <li className="list-group-item d-flex">
                    <p className='fw-bold'><AiOutlineRight /> Degree:</p>
                    <span><input type="text" id="degree" name='degree' value={data.degree} onChange={handleChange} className={`${loading ? 'bg-white' : ''}`} disabled={loading} /></span>
                  </li>
                  <li className="list-group-item d-flex">
                    <p className='fw-bold'><AiOutlineRight /> Email:</p>
                    <span><input type="text" id="email" name='email' value={data.email} onChange={handleChange} className={`${loading ? 'bg-white' : ''}`} disabled={loading} /></span>
                  </li>
                  <li className="list-group-item d-flex">
                    <p className='fw-bold'><AiOutlineRight /> Freelance:</p>
                    <span><input type="text" id="freelance" name='freelance' value={data.freelance} onChange={handleChange} className={` ${loading ? 'bg-white' : ''}`} disabled={loading} /></span>
                  </li>
                </ul>
              </div>
              <div className='mt-1'>
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About
