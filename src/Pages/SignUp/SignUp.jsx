import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';




const SignUp = () => {
  const {createUser} = useContext(AuthContext)
    const { register, handleSubmit,  formState: { errors } } =useForm();

const onSubmit = data =>{
  console.log(data)
   createUser(data.email, data.password)
   .then(result =>{
      const user = result.user 
      console.log(user)
      Swal.fire({
        icon: 'success',
        title: 'user login successfull',
   
      })
     })

   .catch(error =>console.log(error))
  
};



   return (
      <div className="px-16  bg-slate-200 py-10">
      <div className='hero min-h-screen'>
     <div className="hero-content flex-col lg:flex-row justify-between w-full ">  
    <div className="text-center lg:text-left w-1/2">
           <img className='rounded-xl' src="https://thedentistsdorridge.co.uk/wp-content/uploads/2019/11/be_a_denist.jpg" alt="" />
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="card w-1/2 max-w-md shadow-3xl bg-base-100 mt-14">
      <div className="card-body">
      <h1 className='text-center text-3xl font-bold my-3'>Sign up to Doc  house</h1>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-[18px]">Name</span>
          </label>
          <input type="name"  {...register('name' , {required:true})} placeholder="type your name" className="input input-bordered" />
          {errors.name && <span className='text-red-700'>Name field is required</span>}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-[18px]">User Name</span>
          </label>
          <input type="name" {...register('username' , {required:true})}placeholder="type your user name" className="input input-bordered" />
          {errors.username && <span className='text-red-700'>user name field is required</span>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[18px]">Email</span>
          </label>
          <input type="text" {...register('email' , {required:true})} placeholder="type your email" className="input input-bordered" />
          {errors.email && <span className='text-red-700'>email field is required</span>}
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text text-[18px]">Password</span>
          </label>
          <input type="password" {...register("password", {required:true ,       
              minLength:6 ,
                 maxLength:20,
                 pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}$/
                
                })}  placeholder="type your password" className="input input-bordered" />
         {errors.password && <span className='mt-1 text-red-700' role='alert'>password must be at least a capital letter,a small letter , a number & a special character</span>}

        </div>
        <div className="form-control">
        <input className='border rounded-lg bg-[#F7A582] px-5 py-2 text-xl text-white mb-3 ' type="submit" value="Sign Up" />
        </div>
        <p className='text-[16px] text-center'>Already registered ? Go to <Link className='uppercase text-red-800 font-medium hover:underline' to='/signin'>Sign in</Link></p>
      </div>
    </form>
  </div>
</div>


 </div>
  
 

 

    );
};

export default SignUp;