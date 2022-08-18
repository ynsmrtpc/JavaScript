import React from 'react'
import { connect } from 'react-redux'
import MyBlogListItem from './BlogListItem'

const MyBlogList = (props) => {
  return (
    <ul>
      {props.blogs.map((blog) => {
        return <MyBlogListItem key={blog.id} {...blog} />
      })}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  }
}

// Higher Order Component (HOC)
export default connect(mapStateToProps)(MyBlogList)
