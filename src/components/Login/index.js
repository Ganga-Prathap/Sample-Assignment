import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {

    state = {
        username: '',
        password: '',
        showErrorMessage: false,
    }


    renderUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    renderPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    renderSuccessfulLogin = (jwtToken) => {
        const {history} = this.props
        Cookies.set('jwtToken', jwtToken, {expires: 3})
        history.replace("/products")
    }

    renderFailureLogin = () => {
            this.setState({
                showErrorMessage: true
            })
    }

    submitForm = (event) => {
        event.preventDefault()
        const {username, password} = this.state
        // const userDetails = {
        //     username,
        //     password
        // }

        if(username === 'prathap' && password === 'prathap1331'){
            const jwtToken = 'dkdsngsndiungsdgiingndkfni'
            this.renderSuccessfulLogin(jwtToken)
        }
        else{
            this.renderFailureLogin()
        }

        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(userDetails)
        // }

        // const loginResponse = await fetch('login_url', options)
        // if (loginResponse.ok === 'true'){
        //     const data = await loginResponse.json()

        //     this.renderSuccessfulLogin(data.jwtToken)
        // }
        // else{
        //     this.renderFailureLogin()
        // }
    }

    render(){
        const {showErrorMessage} = this.state
        return (
            <div className="login-container">
                <form onSubmit={this.submitForm} className="form-container">

                <div>
                    <label htmlFor="username">username </label>
                    <input type="text" placeholder="username" id="username" onChange={this.renderUsername}/>
                 </div>
                 <div>
                    <label htmlFor="password">username </label>
                    <input type="password" placeholder="password" id="password" onChange={this.renderPassword}/>
                 </div>

                 <button type="submit" className="login-button">Login </button>
                 {showErrorMessage && <p>username and password are wrong</p> }

                </form>
            </div>
        )
    }
}

export default Login