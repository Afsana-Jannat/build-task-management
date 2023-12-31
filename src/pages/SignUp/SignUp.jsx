import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Login/SocialLogin";


const SignUp = () => {

  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
              occupation: data.occupation
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added to the database')
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/");
                }
              })

          })
          .catch(error => console.log(error))
      })
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-400 mt-1">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Occupation</span>
                </label>
                <input type="text" {...register("occupation", { required: true })} name="occupation" placeholder="Occupation"
                  className="input input-bordered" />
                {errors.name && <span className="text-red-400 mt-1">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", {
                  required: true
                })} placeholder="Photo URL"
                  className="input input-bordered" />
                {errors.photoURL && <span className="text-red-400 
                mt-1">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.name && <span className="text-red-400 mt-1">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",
                  {
                    required: true,
                    minLength: 6,
                    maxLength: 20
                  })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p
                  className="text-red-400 mt-1">Password is required</p>}
                {errors.password?.type === 'minLength' && <p
                  className="text-red-400 mt-1">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p
                  className="text-red-400 mt-1">Password must be less then 20 characters</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-pink-600 text-xl font-bold text-white" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-center mb-4"><small>
              Already have an account
              <Link className="text-xl ml-2 font-semibold text-pink-500" to="/login">Login</Link></small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;