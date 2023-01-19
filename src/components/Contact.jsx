import React, { useState } from 'react'
import '../style/Contact.css'
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const formHandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }
  return (
    <>
      <div className='contact'>
        <div>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" placeholder='Abc' autoComplete='off' name='name' value={form.name} onChange={(e) => formHandle(e)} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" placeholder='Abc@example.com' autoComplete='off' name='email' value={form.email} onChange={(e) => formHandle(e)} />
            </div>
            <div>
              <label>Ask:</label>
              <input type="text" placeholder='Abc ....' autoComplete='off' name='password' value={form.password} onChange={(e) => formHandle(e)} />
            </div>
            <button type="submit" className='btn'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
