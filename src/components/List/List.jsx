import React from 'react'
import PropTypes from 'prop-types'
import Video from '../Video/Video'
import Article from '../Article/Article'
import WithSortViews from '../WithSortViews/WithSortViews'

const SortedVideo = WithSortViews(Video)
const SortedArticle = WithSortViews(Article)

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <SortedVideo key={item.id} {...item} />

      case 'article':
        return <SortedArticle key={item.id} {...item} />

      default:
        return null
    }
  })
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default List
