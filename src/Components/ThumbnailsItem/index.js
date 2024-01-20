import './index.css'

const ThumbnailsItem = props => {
  const {imageDetails, getImageId} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImage = () => {
    getImageId(id)
  }

  return (
    <li className="img-item">
      <button className="img-btn" type="button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="img"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailsItem
