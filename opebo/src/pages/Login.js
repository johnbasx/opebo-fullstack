import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth";
const logo = require("../assets/images/logo.png");

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };
  const signUpForm = () => (
    <div class='min-h-screen flex items-start justify-center font-sans bg-gray-100 py-2 px-4 sm:px-6 lg:px-8'>
      <div class='max-w-md w-full'>
        <div>
          <img class='mx-auto h-24 mt-10 w-auto' src={logo} alt='OpeBo' />
          <h2 class='mt-10 text-center text-3xl leading-9 font-sans font-bold text-black'>
            Hi, Welcome back!
          </h2>
          <p class='mt-0 text-center text-sm font-sans leading-5 text-gray-600 max-w'>
            <a
              href='/signup'
              class='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
            >
              Oops! New here? Go to Sign up
            </a>
          </p>
        </div>
        <form class='mt-8' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div class='rounded-md shadow-sm'>
            <div>
              <input
                aria-label='Email address'
                name='email'
                type='email'
                required
                onChange={handleChange("email")}
                class='appearance-none rounded-none relative bg-gray-300 block w-full px-3 py-2 border border-gray-100 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Email address'
                value={email}
              />
            </div>
            <div class='mt-4'>
              <input
                aria-label='Password'
                name='password'
                type='password'
                required
                onChange={handleChange("password")}
                class='appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-300 border border-gray-300 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Password'
                value={password}
              />
            </div>
          </div>

          <div class='mt-6 flex items-center justify-between'>
            <div class='flex items-center'>
              <input
                id='remember_me'
                type='checkbox'
                class='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
              />
              <label
                for='remember_me'
                class='ml-2 block text-sm leading-5 text-gray-900'
              >
                Remember me
              </label>
            </div>

            <div class='text-sm leading-5'>
              <a
                href='#'
                class='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div class='mt-6'>
            <button
              onClick={clickSubmit}
              type='submit'
              class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
            >
              <span class='absolute left-0 inset-y pl-3'>
                <svg
                  class='h-5 w-5 text-white group-hover:text-indigo-400 transition ease-in-out duration-150'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clip-rule='evenodd'
                  />
                </svg>
              </span>
              Sign In
            </button>
            <div class='text-sm leading-5 mt-4 text-center'>
              <a
                href='/'
                class='font-medium text-orange-500 hover:text-gray-900 focus:outline-none focus:underline transition ease-in-out duration-150'
              >
                Go Back
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className='alert alert-info'>
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to='/admin/dashboard' />;
      } else {
        return <Redirect to='/user/profile' />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };
  return (
    <div>
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </div>
  );
};

export default Signin;
