import React from 'react'
import { Link } from 'react-router-dom'

const MyBlogListItem = ({ id, title }) => {
  return (
    <>
      <li>
        {title} - <Link to={`/myblogs/${id}`}>Details</Link> -{' '}
        <Link to={`/edit/${id}`}>Edit</Link>
      </li>
    </>
  )
}

export default MyBlogListItem
