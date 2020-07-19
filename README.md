# Bspoke

- [Full Stack Project](#Full-Stack-Project)
  - [Overview](#Overview)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
      - [Data Heirarchy](#Data-Heirarchy)
  - [Post-MVP](#Post-MVP)
  - [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


<br>

## Overview

_**Bspoke** is an alternative to Etsy where creators can create their own shops to display and sell their work. Unlike Etsy, creators can also include digital products._

### Permissions

<!-- Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur](). -->

<br>

## MVP

_The **Bspoke** MVP will allow a user to create an account, browse existing products, upload their own products, and update or delete their listings._

<br>

### MVP Goals

- _User Registration - DONE_
- _User Auth - DONE_
- _Users can update and delete their profiles. DONE_ 
- _Users can create listings for their products. DONE_
- _Home page with artists and several pieces by each artist. DONE_
- _User can click on a piece to get the listing info. DONE_
- _Listing info includes at least one image, title, product details, and price. DONE_
- _Users (aka artists) can upload files/images to display products._


<br>

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front End._                               |
|   React Router   | _Routing and linking from one component to another._ |
|      Axios       | _API calls._                               |
|      Rails       | _Back End._                                |
|       AWS        | _File Storage._                            |
|       SASS       | _Styling._                                 |


<br>

### MVP Client (Front End)

#### Wireframes

![bspoke-home](https://i.imgur.com/8Ztmahn.png)

- Desktop Home

![bspoke-register](https://i.imgur.com/RrOgQuH.png)

- Desktop Register New User

![bspoke-login](https://i.imgur.com/187Vvca.png)

- Desktop User Login

![bspoke-listing](https://i.imgur.com/cCxtJk8.png)

- Desktop Listing

![bspoke-account](https://i.imgur.com/vh3adPs.png)

- Desktop Account Page

![bspoke-new-listing](https://i.imgur.com/5jD5Mx2.png)

- Create Listing

![bspoke-cart](https://i.imgur.com/d3VoUwR.png)

- Desktop Cart

![bspoke-home-mobile](https://i.imgur.com/UyVYTgt.png)

- Mobile Home

![bspoke-register-mobile](https://i.imgur.com/zYn6u4X.png)

- Mobile Register New User

![bspoke-login-mobile](https://i.imgur.com/tfll8FB.png)

- Mobile User Login

![bspoke-account-mobile](https://i.imgur.com/4m7D6PE.png)

- Mobile Account Page

![bspoke-listing-mobile](https://i.imgur.com/Av0UTTa.png)

- Mobile Listing

![bspoke-new-listing-mobile](https://i.imgur.com/rLnrLmt.png)

- Create Mobile Listing

#### Component Hierarchy

![bspoke-component-hierarchy](https://i.imgur.com/zKIQDOf.png)

#### Component Breakdown

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
| Header            |   n   | _The header will contain the title/logo, and button to login/register._ |
| Nav               |   n   | _Nav buttons in header to link to home, login, registration, and account pages._ |
| Footer            |   n   | _The footer will contain credits and links to my github, linkedin, etc._ |
| Layout            |   y   | _Layout component will house state and pass props to everything under it._ |
| Home              |   n   | _Landing page containing a large featured image, and the gallery._                 |
| Gallery           |   n   | _Artist names and several of their pieces displayed as one block on the home page._ |
| Gallery Card      |   n   | _Thumbnails of listings, displayed in gallery on homepage, and on account page._ |
| User Registration |   n   | _Users can create new accounts._ |
| Login             |   n   | _Users log into their existing accounts._ |
| Listing           |   n   | _Product listing page containing details, descriptions, images, and artist info. Is also contained multiple times (one for each listing) in the account page. Users can edit their own listings here._ |
| Create Listing    |   n   | _Form page where users can create new listings._                 |
| Details           |   n   | _Specific details for a given listing such as price, resolution, etc._ |
| Account           |   n   | _Artist account page where users can see all of their own listings in one place._ |
| Artist Bio        |   n   | _Artist display name and bio info. Displayed on home, listing, and account pages._ |

<br>

### MVP Server (Back End)

#### ERD Model

![bspoke-ERD](https://i.imgur.com/pmsjg2i.png)

#### Endpoints

- GET `/users`
	- Index route returning an array of all Users and associated listings
- GET `/users/:id`
	- Show route for a user requested by ID
- POST `/users`
	- Create route for a new user
- PUT `/users/:id/nominate
  - Update a users info by id
- GET `/listings`
  - Index route returning all listings
- GET `/listings/:id`
  - Show a specific listing by id
- GET `/users/:id/listings`
  - Index route returning listings belonging to a specific user
- POST `/users/:id/listings`
  - Create route for users to create new listings
- PUT `/users/:id/listings`
  - Update route where users can update existing listings
- DELETE `/users/:id/listings`
  - Destroy route where users can delete a listing
- GET `/3dlistings`
  - Index route returning all 3D listings
- GET `/users/:id/3dlistings`
  - Index route returning all 3D listings belonging to user of a specific id
- GET `/2dlistings`
  - Index route returning all 2D listings
- GET `/users/:id/2dlistings`
  - Index route returning all 2D listings belonging to user of a specific id

<br>

***

### Timeframes

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Create Database                     |    H     |     6 hrs      |     6 hrs     |
| Create rails controllers            |    H     |     4 hrs      |     2 hrs     |
| Implement S3 on back end            |    H     |     3 hrs      |     4 hrs     |
| Auth back end                       |    H     |     4 hrs      |     3 hrs     |
| Create Component Files (boilerplate)|    H     |     2 hrs      |     0.5 hrs   |
| Create react routes                 |    H     |     4 hrs      |     8 hrs     |
| Build out components                |    H     |     10 hrs     |     8 hrs     |
| Implement S3 on front end           |    H     |     4 hrs      |     2 hrs     |
| Front end CRUD                      |    H     |     4 hrs      |     5 hrs     |
| Auth front end                      |    H     |     2 hrs      |     2 hr      |
| Styling                             |    H     |     15 hrs     |     10 hrs    |
| PostMVP                             |    L     |     0 hrs      |     0     |
| TOTAL                               |          |     59 hrs     |     50.5 hrs  |

<br>

### Schedule

|  Day   | Deliverables                              | Complete? |
| ------ | ----------------------------------------- | --------- |
|Mar 5th | Planning, ERD, component hierarchy, wireframes | DONE |
|Mar 6th | Project pitch, build backend | DONE |
|Mar 7th | React day! Build all components, start functionality | DONE |
|Mar 8th | Impliment user auth | DONE |
|Mar 9th | Styling, Axios calls | DONE |
|Mar 10th| More styling, front-end CRUD | DONE |
|Mar 11th| MVP complete, start PostMVP |  |
|Mar 12th| Polishing |  |
|Mar 13th| Final presentations |  |

<br>

***

## Post-MVP

- _Search functionality_
- _Add non-digital art forms_
- _Slideshows/image carousels for images_
- _E-commerce_
- _List of previously viewed items_
- _Put artist names in listing tables_
- _Front end update and delete on listings_
- _Display "featured" artists on home, other artists can be searched for._
- _List artist names (links) in a side bar_
- _Page that displays all listings (without artist bio)_
- _Make tabs to toggle between different listing types_

<br>

***

## Project Change Log

- _Originally wanted to encorporate the ability to update and delete listings on the front end as part of MVP, but I opted for moving that to PostMVP in order to spend more time on potentially more important things._
- _Mobile wireframes for "home" have only 2 listings displayed at a time for each category because the plan is to add an image carousel in Post MVP, so for now, all listings are displayed._

## Code Showcase

This is the part of my app that handles the creation of new listings. It took a lot of trial and error to figure out how to declare the initial state of "pictures" due to using S3 file storage, and the same submit button working for all of the form data at once. 

```  
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
```

## Code Issues & Resolutions

- _I initially planned on using devise for auth, but after spending an entire day trying to make sure my back-end was working properly, I opted for bcrypt instead, because it's something I've at least seen before._
- _Ran into a lot of issues with my initial table names so I had to drop and rebuild my database several times until I figured out syntax that would cooperate. (It didn't seem to like having a digit in the table names)_
- _Had some trouble with my front end routing because I have shared components nested within other components that contain information passed from props, but are also links to specific places. I ended up having to move state into a few additional components and conditionally rendering what info shows up depending on how the user gets to that link._

***

this is another unnecessary edit
