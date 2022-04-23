import './index.css'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext'
import Post from './components/Post';

import About from './pages/About'
import {BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom'

function App(){   
        return(
            <FeedbackProvider>
            <Router>
            <Header />
            <div className="container">
            {/* <Card >
                  <NavLink to="/" activeClassName="active">Home</NavLink> &nbsp;&nbsp;
                  <NavLink to="/about" activeClassName="active">About</NavLink>
              </Card> */}

            <Routes>
            <Route path='/' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList  />
                  <AboutIconLink />
                </>
              }></Route>
               {/* <Route exact path="/">
                  <Route  path="/" element={<FeedbackForm handleAdd={addFeedback} />} ></Route>
                  <Route  element={<FeedbackStats feedback={feedback} />} ></Route>
                  <Route  path="/" element={<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />} ></Route>
              </Route>  */}
              <Route path='/about' element={<About />} />
              <Route path='/post/*' element={<Post />} />
              {/* <Route path='/post/:id/:name' element={<Post />} /> */}

              </Routes>
              
            </div>           
            </Router>
            </FeedbackProvider>
        )

        // return(
        //     React.createElement('div',{ className : 'container'},
        //     React.createElement('h1',{},"My App"),
        //     React.createElement('p',{},"Hello"))
        // )

        // const title = "Blog Title";
        // const body = "This is my blog post";

        // const comments = [
        //     {'id': 1, 'title':"this is blog post 1"},
        //     {'id': 2, 'title':"this is blog post 2"},
        //     {'id': 3, 'title':"this is blog post 3"},
        // ]

        // const loading = false;
        // const showComments = true;

        // const commentBlock = (<div className="comments">
        // <h3>Comments:{comments.length}</h3>
        // <ul>
        //     {comments.map((comment,index) =>
        //     (<li key={index}>{comment.title}</li>)
        //     )}
        // </ul>
        // </div>)

        // if(loading) return <h1>Loading...</h1>
     
        // return (
        //     <div className="container">
        //     <h1>{title.toUpperCase()}</h1>
        //     <p>{body}</p>
            
        //     {showComments &&  commentBlock}
            
        //     </div> 
        // )
}


export default App