// Write your code here.
import './index.css'

const Techcards = props => {
  const {bannerDetails} = props
  const {title, description, imageUrl, className} = bannerDetails
  return (
    <li className={`${className} card-cont`}>
      <div>
        <h1 className="head">{title}</h1>
        <p className="para">{description}</p>
        <img src={imageUrl} className="image" alt={title} />
      </div>
    </li>
  )
}
export default Techcards
