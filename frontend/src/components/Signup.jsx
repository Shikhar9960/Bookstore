import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"


const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen  items-center justify-center">
        <div className="w-[500px] ">
          <div className='modal-box border' >
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Signup!</h3>
              <div className='mt-5 space-y-2'>
                <p>Full Name</p>
                <input type="text" name=""  placeholder='Enter Your Name' className='w-88 px-3 py-1 rounded-md border outline-none' {...register("name", { required: true })} />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

              </div>
              <div className='mt-5 space-y-2'>
                <p>Email</p>
                <input type="email" name=""  placeholder='Enter Your Email' className='w-88 px-3 py-1 rounded-md border outline-none' {...register("email", { required: true })} />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

              </div>
              <div className='mt-3 space-y-2'>
                <p>password</p>
                <input type="password" name=""  placeholder='Enter Your Password' className='w-88 px-3 py-1 rounded-md border outline-none' {...register("email", { required: true })} />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

              </div>
              <div className='flex mt-7 justify-around'>
                <button className='bg-pink-500 rounded-md py-[2px] px-3 text-white hover:bg-pink-700 duration-200'>Sign Up</button>
                <p className='text-[1rem]'>Have Account?{""}
                  <button onClick={() => document.getElementById('my_modal_3').showModal()} className='underline text-blue-500 cursor-pointer'>
                    Login
                  </button>{""}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
