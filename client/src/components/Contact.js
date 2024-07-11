import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

function Contact() {
    const formik = useFormik({
        initialValues:{
          name:'',
          email:'',
          subject:'',
          telephone:'',
          message:''
    
        },
        validationSchema: Yup.object({
          name: Yup.string().max(15, "Must be 15 characters or less").required('Name is required'),
          email: Yup.string().email('Invalid email').required('Email is required'),
          subject: Yup.string().required('subject is required'),
          telephone: Yup.number().positive().integer().required('Must be a number').max(10),
          message: Yup.string().required('Enter the message')
        }),
        onSubmit: (values) => {
          console.log(values);
        },
      })
      console.log(formik.touched)
  return (
    <div>
       <form className='lg:w-3/4 lg:pl-4 flex flex-col' onSubmit={formik.handleSubmit}>
          <h3 className='text-xl font-semibold mb-4'>Have you heard about us before?</h3>
          <p className='text-lg mb-2'>We would like to let you know more about Event Hub</p>
          <div className='mb-4 ml-10 mt-5'>
            <input className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            type='text'
            name='name'
            placeholder='Enter your Full Name'
            onChange={formik.handleChange}
            value={formik.values.name}
            /> 
            <p className='text-red-500'>{formik.touched.name && formik.errors.name ? <p>{ formik.errors.name}</p> : null}</p>
          </div>
          <div className='mb-4 ml-10'>
            <input className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            type='email'
            name='email'
            placeholder='Enter your Email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            />
            <p className='text-red-500'>{formik.touched.email && formik.errors.email ? <p>{ formik.errors.email}</p> : null}</p>
          </div>
          <div className='mb-4 ml-10'>
            <input className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            type='text'
            name='subject'
            placeholder='Enter Subject'
            onChange={formik.handleChange}
            value={formik.values.subject}
            onBlur={formik.handleBlur}
            />
            <p className='text-red-500'>{formik.touched.subject && formik.errors.subject ? <p>{ formik.errors.subject}</p> : null}</p>
          </div>
          <div className='mb-4 ml-10'>
            <input className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            type='tel'
            name='telephone'
            placeholder='Enter Phone Number'
            onChange={formik.handleChange}
            value={formik.values.telephone}
            onBlur={formik.handleBlur}
            />
            <p className='text-red-500'>{formik.touched.telephone && formik.errors.telephone ? <p>{ formik.errors.telephone}</p> : null}</p>
          </div>
          <div className='mb-4 ml-10'>
            <textarea className='w-full p-4 bg-blue-00 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500'
            placeholder='Enter Message'
            name='message'
             rows='4'
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
            />
            <p className='text-red-500'>{formik.touched.message && formik.errors.message ? <p>{ formik.errors.message}</p> : null}</p>
          </div>
          <div className='text-center ml-10 mb-10'>
            <button className='w-full p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:g-blue-700'
            type='submit'
            >
              Send Message
              </button>
          </div>
        </form>
    </div>
  )
}

export default Contact
