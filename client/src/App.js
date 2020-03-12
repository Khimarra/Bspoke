import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { 
  verifyUser, 
  loginUser, 
  registerUser, 
  create3dListing, 
  create2dListing, 
  editUser, 
  deleteUser 
} from './services/api-helper'

import Home from './components/views/Home'
import Login from './components/views/Login'
import Registration from './components/views/Registration'
import Listing from './components/views/Listing'
import Create3dListing from './components/views/Create3dListing'
import Create2dListing from './components/views/Create2dListing'
import Account from './components/views/Account'
import AccountEdit from './components/views/AccountEdit'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      authFormData: {
        first_name: '',
        last_name: '',
        username: '',
        artist_bio: '',
        email: '',
        password: ''
      },
      new3dListingData: {
        title: '',
        description: '',
        price: null,
        polygons: null,
        is_uvd: false,
        is_textured: false,
        is_rigged: false,
        is_animated: false,
        listingType: 'three',
        user_id: null
      },
      new2dListingData: {
        title: '',
        description: '',
        price: null,
        height: null,
        width: null,
        dpi: null,
        listingType: 'two',
        user_id: null
      },
      pictures: []
    }
  }

  async componentDidMount() {
    const currentUser = await verifyUser()
    if (currentUser) {
      this.setState({ currentUser })
    }
  }


  // ------ CREATE LISTING ------ 

  createHandleChange = (e, listingType) => {
    let { name, value } = e.target
    let objectName

    if (value === 'true') {
      value = true
    } else if (value === 'false') {
      value = false
    }

    if (listingType == 'three') {
      objectName = 'new3dListingData'
    } else if (listingType == 'two') {
      objectName = 'new2dListingData'
    }

    this.setState(prevState => ({
      [objectName]: {
        ...prevState[objectName],
        [name]: value
      }
    }))
  }

  createHandle3dSubmit = (e) => {
    e.preventDefault()
    const listingData = this.state.new3dListingData
    listingData.user_id = this.state.currentUser.id
    let tData = new FormData();
    tData.append('pictures', this.state.pictures)
    tData.append('title', this.state.new3dListingData.title)
    tData.append('description', this.state.new3dListingData.description)
    tData.append('price', this.state.new3dListingData.price)
    tData.append('polygons', this.state.new3dListingData.polygons)
    tData.append('is_uvd', this.state.new3dListingData.is_uvd)
    tData.append('is_textured', this.state.new3dListingData.is_textured)
    tData.append('is_rigged', this.state.new3dListingData.is_rigged)
    tData.append('is_animated', this.state.new3dListingData.is_animated)
    tData.append('listingType', this.state.new3dListingData.listingType)
    tData.append('user_id', this.state.new3dListingData.user_id)
    create3dListing(tData)
  }

  handlePicturesChange = (e) => {
    let pictures = e.target.files[0]
    if (pictures) {
      this.setState({pictures: pictures})
    }

  }

  createHandle2dSubmit = (e) => {
    e.preventDefault()
    const listingData = this.state.new2dListingData
    listingData.user_id = this.state.currentUser.id
    console.log(listingData)
    create2dListing(listingData)
  }



  // ------ AUTH ------

  handleLoginButton = () => {
    this.props.history.push('/login')
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData)
    this.setState({ currentUser })
  }

  handleRegister = async (e) => {
    e.preventDefault()
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({ currentUser })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }))
    console.log(this.state.authFormData)
  }


  // ------ USER CRUD ------

  handleEdit = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        [name]: value
      }
    }))
  }

  handleUserEdit = async (e) => {
    e.preventDefault()
    console.log(this.state.authFormData)
    const editedUser = await editUser(this.state.currentUser.id, this.state.currentUser)
    this.setState({ authFormData: editedUser })
    console.log(editedUser)
  }

  handleUserDelete = async (e) => {
    e.preventDefault()
    const deletedUser = await deleteUser(this.state.currentUser.id)
    return deletedUser
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/login' render={() => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} 
            />
          )} />

          <Route exact path='/registration' render={() => (
            <Registration
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} 
            />
          )} />

          <Route exact path='/listing/:listingtype/:id' component={Listing} />

          <Route exact path='/account/:id' component={() => (
            <Account
              currentUser={this.state.currentUser} />)} />

          <Route exact path='/account/:id/edit' render={() => (
            <AccountEdit
              handleEdit={this.handleUserEdit}
              handleChange={this.handleEdit}
              currentUser={this.state.currentUser}
              handleDelete={this.handleUserDelete} />)} />

          <Route exact path='/account/:id/createlisting/three' render={() => (
            <Create3dListing
              handleChange={this.createHandleChange}
              handlePicturesChange={this.handlePicturesChange}
              form3dData={this.state.new3dListingData}
              onSubmit={this.createHandle3dSubmit}
            />)} />

          <Route exact path='/account/:id/createlisting/two' render={() => (
            <Create2dListing
              handleChange={this.createHandleChange}
              handlePicturesChange={this.handlePicturesChange}
              form2dData={this.state.new2dListingData}
              onSubmit={this.createHandle2dSubmit}
            />)} />


        </Switch>
      </div>
    )
  }
}

export default App;
