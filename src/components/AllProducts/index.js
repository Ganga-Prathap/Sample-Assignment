import {Link} from 'react-router-dom'
import './index.css'


const AllProducts = (props) => {
    const {product} = props
    const {id,title, url} = product

    return (
        <Link to={`/products/${id}`}> 
        <li>
            <h1 className="heading">{title} </h1>
            <img src={url} alt={url} className="image"/>
        </li>
        </Link>
    )
}

export default AllProducts