import React from 'react'
import { login } from '../actions/auth'

const LoginPage = () => (
  <div className="container">
    <div
      className="container text-center my-5"
      style={{ top: '0', position: 'absolute' }}
    >
      <div className="row ">
        <div className="col">
          <p className="h3 pt-5 text-center">
            <label className="d-block text-primary p-1 m-1">You have to</label>
            <label className="d-block text-secondary p-1 m-1">
              login to see
            </label>
            <label className="d-block text-primary p-1 m-1">all blogs</label>
            <label className="d-block text-secondary p-1 m-1">and</label>
            <label className="d-block text-primary p-1 m-1">create your</label>
            <label className="d-block text-secondary p-1 m-1">own</label>
            <label className="d-block text-primary p-1 m-1">blogs </label>
          </p>
        </div>
      </div>
    </div>

    <div
      className="container text-center my-5 pb-5"
      style={{ bottom: '0', position: 'absolute' }}
    >
      <div className="row ">
        <div className="col">
          <label className="primary">Login with</label>
          <hr />
          <button className="btn btn-primary" onClick={login}>
            <i className="fa fa-google"></i>
          </button>{' '}
        </div>
      </div>
    </div>
  </div>
)

export default LoginPage
