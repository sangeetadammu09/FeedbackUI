import React from 'react'
import {useParams, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {
    const params = useParams()
    //const status = 404
    const navigate = useNavigate()

    const onclick = () => {
        navigate('/about')
    }

    // if(status === 404) {
    //     return <Navigate to='/notfound' />
    // }
  return (
    <>
     {/* <h4>Post : {params.id}</h4>
     <p>Name : {params.name}</p> */}
     <button type='button' onClick={onclick}>Click</button>
     <Routes>
         <Route path= '/show' element={<h1>Hello World!</h1>}/>
     </Routes>
    </>
  )
}

export default Post