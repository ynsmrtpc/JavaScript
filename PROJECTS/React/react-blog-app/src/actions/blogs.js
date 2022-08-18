import db from '../firebase/firebaseConfig'

export const addBlog = (blog) => ({
  type: 'ADD_BLOG',
  blog,
})

export const addBlogtoDb = (blogData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const { title = '', description = '', dateAdded = 0 } = blogData
    const blog = { title, description, dateAdded, uid }
    db.ref('blogs')
      .push(blog)
      .then((res) => {
        dispatch(
          addBlog({
            id: res.key,
            ...blog,
          }),
        )
      })
  }
}

export const removeBlog = (id) => ({
  type: 'REMOVE_BLOG',
  id: id,
})

export const removeBlogFromDb = (id) => {
  return (dispatch) => {
    return db
      .ref(`blogs/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBlog(id))
      })
  }
}

export const editBlog = (id, updates) => ({
  type: 'EDIT_BLOG',
  id,
  updates,
})

export const editBlogFromDb = (id, updates) => {
  return (dispatch) => {
    return db
      .ref(`blogs/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editBlog(id, updates))
      })
  }
}

export const setBlogs = (blogs) => ({
  type: 'SET_BLOGS',
  blogs,
})

export const getBlogsFromDb = () => {
  return (dispatch, getState) => {
    return db
      .ref('blogs')
      .once('value')
      .then((snapshot) => {
        const blogs = []
        const uid = getState().auth.uid
        snapshot.forEach((blog) => {
          const result = blog.val()
          if (result.uid == uid) {
            blogs.push({
              id: blog.key,
              ...result,
            })
          }
        })
        dispatch(setBlogs(blogs))
      })
  }
}

export const clearBlogs = () => ({
  type: 'CLEAR_BLOGS',
})
