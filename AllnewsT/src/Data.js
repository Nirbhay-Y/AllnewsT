import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Data() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState('');
  const[handle,sethandle]=useState('')

  // for pagination current page and totalpage should take as variable

const [page, setPage] = useState(0); // Initialize the page number to 0
const [nbPages, setNbPages] = useState(0); // Store the total number of pages

useEffect(() => {
  if (handle=== '') {
   <div><h1>HI</h1></div>
  } else {
    axios
    // & sign is imp for getting next parameter of API
      .get(`https://hn.algolia.com/api/v1/search?query=${handle}&page=${page}`)
      .then((res) => {
        setMyData(res.data.hits);
        setNbPages(res.data.nbPages); // Store the total number of pages
      })
      .catch((error) => {
        setIsError(error.message);
      });
  }
  //calls when pages and handle is updateing
}, [handle,page]); // Include page in the dependency array

  const handleChange=(e)=>{
    sethandle(e.target.value);
  }

  const handleRemove = (postId) => {
    const updatedData = myData.filter((post) => postId !== post.objectID);
    setMyData(updatedData);
  };

  const handleNextPage = () => {
    // imp condition for updating the pages
    if (page < nbPages - 1) {
      setPage(page + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  
  return (
    <>
      <div className='MyStyle'>
        <div>Axios Tutorial</div>
         <form>
        {/*search functionality is important learn this*/}
          <input 
          type="text"
          placeholder='search...'
          value={handle}
          onChange={handleChange}
          />
         </form>
         <div>
  <button onClick={handlePrevPage} disabled={page === 0}>
    Previous Page
  </button>
  <button onClick={handleNextPage} disabled={page === nbPages - 1}>
    Next Page
  </button>
</div>
{isError!=''&& <h1>{isError}</h1>}
{myData.map((post) => (
  <div className="accordion" id="accordionExample" key={post.objectID}>
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading_${post.objectID}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse_${post.objectID}`}
          aria-expanded="true"
          aria-controls={`collapse_${post.objectID}`}
        >
         <strong> {post.title}</strong>
        </button>
      </h2>
      <div
        id={`collapse_${post.objectID}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading_${post.objectID}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
            <p>
              By Author: <span>{post.author},<br/> </span>
              <span>Total Comments: {post.num_comments} </span>
            </p>
            <div>
              <a href={post.url} target='_main'>
               <button className='btn btn-primary'> Read More</button>
              </a>
              <a href='#' className='Remove'onClick={() => handleRemove(post.objectID)}>
               <button className='RemoveButton'>Remove</button> 
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
))}

      </div>
    </>
  );
}

export default Data;