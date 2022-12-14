import React, { useState, useContext } from 'react'
import AlertContext from '../context/alert/alertContext'
import GithubContext from '../context/github/githubContext'

const Search = () => {
  const { searchUsers, clearUsers, users } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)
  const [keyword, setKeyword] = useState('')

  const onChange = (e) => {
    setKeyword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (keyword === '') {
      setAlert('Please enter a value!', 'danger')
    } else {
      searchUsers(keyword)
      setKeyword('')
    }
  }

  return (
    <div className="containeer my-0 mt-3">
      <form className="input-group" onSubmit={onSubmit}>
        <div className="container my-3">
          <div className="input-group col-md-4 d-flex mx-auto">
            <input
              type="text"
              value={keyword}
              onChange={onChange}
              className="form-control"
            />
            <div className="input-group-append">
              <button type="submit" className="btn-purple btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <button
          onClick={clearUsers}
          className="btn btn-outline-secondary btn-sm d-flex m-auto my-0"
        >
          Clear Results
        </button>
      )}
    </div>
  )
}
export default Search
