import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from "react-router-dom";
import "./App.css";
function App(props) {
    ///////////////////
    // Style Objects
    ///////////////////

    const h1 = {
      textAlign: "center",
      margin: "10px",
      color: "white"
    }
    const h2 = {
      textAlign: "center",
      margin: "10px",
      color: "white"
    }
    const h3 = {
      textAlign: "center",
      margin: "10px",
      color: "white"
    }

    const button = {
      backgroundColor: "purple",
      display: "block",
      margin: "auto",
      textColor: "white"
    }

    //////////////////////
    // State & Other Variables
    ///////////////////////
    // API URL
    const url = "https://casneobv5.herokuapp.com/comments/"
    // State to hold the list of posts
    const [posts, setPosts] = useState([])

    const nullComments = {
      name: "",
      comments: ""
    }

    const [targetComments, setTargetComments] = useState(nullComments)

    /////////////////
    // Functions
    ////////////////
    const getComments = async() => {
      const response = await fetch(url)
      const data = await response.json()
      setPosts(data)
    }

    const addComments = async (newComments) => {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newComments)
      })

      getComments()
    }

    const getTargetComments = (comments) => {
      setTargetComments(comments)
      props.history.push("/edit")
    }
    const updateComments = async (comments) => {
      const response = await fetch(url + comments.id, {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(comments)
      })
      getComments()
    }

    const deleteComments = async (comments) => {
      const response = await fetch(url + comments.id + "/", {
        method: "delete"
      })
      getComments()
    }

    ////////////////////
    // useEffects
    ////////////////////
    useEffect(() => {getComments()}, [])
    /////////////////
    // Returned JSX
    /////////////////
    return <div className="App">
    <img src="https://i.imgur.com/0LwSmOxs.jpg" alt="arcent a" class="center"></img>
    <h1 style={h1}>د سیلیه په نوم کیمپ ته ښه راغلاست</h1>
    <h1 style={h1}>Welcome to CAS</h1>
    <h2 style={h2}>دا ویب پا .ه د معلوماتو لپاره ده او د متحده ایالاتو حکومت نمایندګي یا مکلف نه کوي</h2>
    <h2 style={h2}>This website is for informational purposes only and does not represent or obligate the US Government.</h2>
    <h3 style={h3}>دا سایټ د لیدونکو لپاره د السیلیه کمپ خدماتو او ودانیو لکه خواړه ، طبي ، مذهبي ، تفریح ​​، او د پولیسو خدماتو او دفترونو په اړه معلومات چمتو کوي. لاندې د نصب کولو نقشه او د بیس لارښوونو لیست دی.</h3>
    <h3 style={h3}>This site is meant to provide visitors information about Camp Al Sayliyah services and buildings like dining, medical, religious, recreation, and police services and offices.  Below is an installation map and list of the base directorates.</h3>
    <img src="https://i.imgur.com/Dqwt6l8.jpg" alt="CAS map" class="center"></img>
    <img src="https://i.imgur.com/c0r5gXM.png" alt="CAS contacts" class="center"></img>
    <h2 style={h2}>Below is Camp Al Sayliyah dining menu for this week:</h2>
    <img src="https://i.imgur.com/neuQ3Uk.png" alt="CAS contacts" class="center"></img>
    <h3 style={h3}>مهرباني وکړئ موږ ته لاندې د اللمیلیه کیمپ کې د خواړو سره ستاسو د تجربې په اړه لاندې معلومات راکړئ ، موږ به د خواړو مینو کې ستاسو نظرونه خوښ کړو</h3>
    <h3 style={h3}>Please let us know below about your experience with dining at Camp Al Sayliyah, we would love your feedback on the dining menu.</h3>

    <Link to="/new"><button style={button}>نوې تبصره جوړه کړئ/Create New Comments</button></Link>
    <Switch>
      <Route
        exact
        path="/"
        render={(rp) => <AllPosts posts={posts} {...rp}/>}
      />
      <Route
        path="/post/:id"
        render={(rp) => <SinglePost posts={posts} 
        edit={getTargetComments} 
        deleteComment={deleteComments} 
        {...rp}/>}
      />
      <Route
        path="/new"
        render={(rp) => <Form initialComments={nullComments} handleSubmit={addComments} buttonLabel="create new comments" {...rp}/>}
      />
      <Route
        path="/edit"
        render={(rp) => <Form 
          initialComments={targetComments}
          handleSubmit={updateComments}
          buttonLabel="update comments"
          {...rp}/>}
      />
    </Switch>
    <h4>Hopefully this site is helpful! Engineers Clear the Way! Essayons!</h4>
  </div>;
  }

export default App;
