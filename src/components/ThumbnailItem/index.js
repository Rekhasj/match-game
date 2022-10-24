import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateActiveImage} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickImage = () => {
    updateActiveImage(id)
    // console.log(id)
  }

  return (
    <li className="thumbnail-item-container">
      <button type="button" className="image-button" onClick={onClickImage}>
        <img alt="thumbnail" className="thumbnail-image" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
