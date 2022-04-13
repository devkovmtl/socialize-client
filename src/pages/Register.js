import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  LabelForm,
  InputField,
  InputFieldError,
  PageTitle,
  PageDescription,
  Spinner,
} from '../components';
import { FormRulesOptions } from '../constants';
import { register as registerUser } from '../redux/authSlice';

const Register = () => {
  // error for backend validation
  const [errorBackend, setBackendError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { username, email, password, passwordConfirmation } = data;
    if (password !== passwordConfirmation) {
      setError('passwordConfirmation', 'Password confirmation does not match');
      return;
    }
    setIsLoading(true);
    try {
      const response = await dispatch(
        registerUser({ username, email, password, passwordConfirmation })
      ).unwrap();
      setIsLoading(false);
      if (response.success) {
        navigate('/', { replace: true });
      } else {
        setBackendError(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      setBackendError(error.message);
    }
  };

  return (
    <div className='min-h-screen min-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
      <div className='max-w-lg mx-auto'>
        <PageTitle title='Social Club' color='text-white' />
        <PageDescription
          description='Join the community and share your posts with your friends and the world.'
          color='text-gray-800'
        />
        {isLoading ? (
          <div className='h-100 items-center justify-center'>
            <Spinner />
          </div>
        ) : (
          <form
            className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-slate-100'
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className='text-center text-lg font-medium'>Sign Up</p>
            {errorBackend && (
              <p className='text-red-600 text-xs'>{errorBackend}</p>
            )}
            <div>
              <LabelForm
                htmlFor='username'
                labelName='Username'
                isRequired={true}
                errors={errors && errors.username}
              />

              <div className='relative mt-1'>
                <InputField
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Enter your username'
                  register={register}
                  errors={errors}
                  rules={FormRulesOptions.username}
                />
              </div>
              {errors.username && (
                <InputFieldError error={errors.username.message} />
              )}
            </div>

            <div>
              <LabelForm
                htmlFor='email'
                labelName='Email'
                isRequired={true}
                errors={errors && errors.email}
              />

              <div className='relative mt-1'>
                <InputField
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter a valid email: me@email.com'
                  register={register}
                  errors={errors}
                  rules={FormRulesOptions.email}
                />
              </div>
              {errors.email && <InputFieldError error={errors.email.message} />}
            </div>

            <div>
              <LabelForm
                htmlFor='password'
                labelName='Password'
                isRequired={true}
                errors={errors && errors.password}
              />

              <div className='relative mt-1'>
                <InputField
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Enter your password'
                  register={register}
                  errors={errors}
                  rules={FormRulesOptions.password}
                />
              </div>
              {errors.password && (
                <InputFieldError error={errors.password.message} />
              )}
            </div>

            <div>
              <LabelForm
                htmlFor='passwordConfirmation'
                labelName='Password Confirmation'
                isRequired={true}
                errors={errors && errors.passwordConfirmation}
              />

              <div className='relative mt-1'>
                <InputField
                  type='password'
                  id='passwordConfirmation'
                  name='passwordConfirmation'
                  placeholder='Password Confirmation'
                  register={register}
                  errors={errors}
                  rules={FormRulesOptions.passwordConfirmation}
                />
              </div>
              {errors.passwordConfirmation && (
                <InputFieldError
                  error={
                    errors.passwordConfirmation.message ||
                    'Password confirmation does not match'
                  }
                />
              )}
            </div>
            <button
              type='submit'
              className='inline-block w-full p-[4px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg  hover:text-white active:text-opacity-75 focus:outline-none focus:ring'
            >
              <span className='block px-8 py-3 text-sm font-medium bg-white rounded-md hover:bg-transparent transition-all'>
                Sign Up
              </span>
            </button>

            <p className='text-sm text-center text-gray-500'>
              Do you have an account?{' '}
              <Link className='underline' to='/login'>
                Sign in
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
