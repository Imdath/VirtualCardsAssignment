import React from 'react'

import './index.css'

const Pagination = ({postsPerPage, totalPosts, currentPage, paginate}) => {
  const pages = []

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className="button-container">
      {pages.map(page => (
        <button
          className={page === currentPage ? 'active-button' : 'inactive-button'}
          type="button"
          key={page}
          onClick={() => paginate(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination
