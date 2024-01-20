import './index.css'

const ImageItem = props => {
  const {imageUrl} = props
  return (
    <li className="img-item">
      <img src={imageUrl} alt="match" className="main-image" />
    </li>
  )
}
export default ImageItem
