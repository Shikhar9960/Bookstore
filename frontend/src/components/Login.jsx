import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-2/4 ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Login!</h3>
            <div className='mt-5 space-y-2'>
              <p>Email</p>
              <input type="email" name=""  placeholder='Enter Your Email' {...register("email", { required: true })} className='w-88 px-3 py-1 rounded-md border outline-none' />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-3 space-y-2'>
              <p>Password</p>
              <input type="password" name=""  placeholder='Enter Your Password' {...register("password", { required: true })} className='w-88 px-3 py-1 rounded-md border outline-none' />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex mt-7 justify-around'>
              <button className='bg-pink-500 rounded-md py-[2px] px-3 text-white hover:bg-pink-700 duration-200' >Login</button>
              <p>Not Registered?{""}
                <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>
                  Signup
                </Link>{""}
              </p>
            </div>
          </form>
        </div>

      </dialog>
    </div>
  )
}

export default Login
