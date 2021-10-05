
import {Component} from 'react'
import './index.css'

import Cookies from 'js-cookie'

import AllProducts from '../AllProducts'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Product extends Component{

    state = {
        productsLIst: [],
        isLoading: true,
    }

    componentDidMount(){
        this.getProducts()
    }

    userLogout = () => {
        const {history} = this.props
        Cookies.remove('jwtToken')
        history.replace('/login')
    }

    getProducts = async () => {

        const options = {
            method: 'GET'
        }

        

        const listOfProductsResponse = await fetch('https://jsonplaceholder.typicode.com/photos', options)
        const temp = await listOfProductsResponse.json()
        console.log(temp)
        const data = temp.map(eachProduct => ({
            id: eachProduct.id,
            title: eachProduct.title,
            url: eachProduct.body,
        }))

        this.setState({
            productsLIst: data,
            isLoading: false,
        })

    }


    render(){
        const {productsLIst, isLoading} = this.state

        return(
            <>
            {
                isLoading? <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />:

            <div>
                <div className="products-header">
                    <h1>Products </h1>
                    <button onClick={this.userLogout} className="logout-button">Logout</button>
                </div>
                <ul>
                    {
                    productsLIst.map(eachProduct =>(
                        <AllProducts key={eachProduct.id} product={eachProduct} />
                    ))
                    }   
                 </ul>
            </div>
    }       
            </>
        )
    }
}

export default Product
