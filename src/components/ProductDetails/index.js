import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


class ProductDetails extends Component{

    state = {
        productInfo: {},
        isLoading: true,
    }

    componentDidMount(){
        this.getProductInfo()
    }

    getProductInfo = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params

        const options = {
            method: 'GET',
        }

        const listOfProductsResponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, options)
        const data = await listOfProductsResponse.json()

        const updatedData = {
            title: data.title,
            url: data.url,
            thumbnailUrl: data.thumbnailUrl,
        }

        this.setState({
            productInfo: updatedData,
            isLoading: false,
        })


    }

    render(){
        const {productInfo, isLoading} = this.state
        const {title, thumbnailUrl, url} = productInfo
        return(
            <>
            {
                isLoading? <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />:
                <div className="product-info-container">
                <h1 className="heading">{title}</h1>
                <img src={url} alt={url} className="image"/>
                <img src={thumbnailUrl} alt={thumbnailUrl} className="image" />
            </div>
            }
            
            </>
        )
    }
}

export default ProductDetails

