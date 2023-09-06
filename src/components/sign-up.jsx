import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HeaderMegaMenu } from './header'
import { useForm } from 'react-hook-form'
import '../styles/sign-up-styles.css'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur' })
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }
  return (
    <div>
      <HeaderMegaMenu />
      <div className='header'>
        <h1>Registration Form</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='label-sign'>
          First Name:
          <input
            className='input-sign'
            {...register('firstName', {
              required: 'The field is required!',
              minLength: 3,
              maxLength: 20,
            })}
          />
        </label>
        <div style={{ height: '10px' }}>
          {errors?.firstName && (
            <p className='p-sign'>{errors?.firstName?.message || 'Error!'}</p>
          )}
        </div>
        <label className='label-sign'>
          Last Name:
          <input
            className='input-sign'
            {...register('lastName', {
              required: 'The field is required!',
              pattern: /^[A-Za-z]+$/i,
              minLength: 3,
              maxLength: 25,
            })}
          />
        </label>
        <div style={{ height: '10px' }}>
          {errors?.lastName && (
            <p className='p-sign'>{errors?.lastName?.message || 'Error!'}</p>
          )}
        </div>
        <label className='label-sign'>
          Age:
          <input
            className='input-sign'
            type='number'
            {...register('age', {
              required: 'The field is required!',
              min: 18,
              max: 99,
            })}
          />
        </label>
        <div style={{ height: '10px' }}>
          {errors?.age && (
            <p className='p-sign'>{errors?.age?.message || 'Invalid age!'}</p>
          )}
        </div>
        <input className='input-sign' type='submit' disabled={!isValid} />
      </form>
      <div>
        <h4 className='h4-sign'>Already have an account?</h4>
      </div>
      <div>
        <Link to='/log-in' style={{ color: 'gray', textDecoration: 'none' }}>
          Log In
        </Link>
      </div>
    </div>
  )
}

export default SignUp
