import { React,useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function REACT() {

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState('');
    const [page, setPage] = useState(0); // Initialize the page number to 0
    const [openAccordion, setOpenAccordion] = useState(null);
    const [nbPages, setNbPages] = useState(0);

useEffect(() => {
      axios
      // & sign is imp for getting next parameter of API
        .get(`https://hn.algolia.com/api/v1/search?query=REACT&page=${page}`)
        .then((res) => {
          setMyData(res.data.hits);
          setNbPages(res.data.nbPages); // Store the total number of pages
        })
        .catch((error) => {
          setIsError(error.message);
        });
    
    //calls when pages and handle is updateing
  }, [page]); // Include page in the dependency array
  
  
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

    const handleAccordionClick = (postId) => {
      // Toggle the open state of the clicked accordion
      setOpenAccordion(openAccordion === postId ? null : postId);
    };
    return(
        <>
             <div className="navbar">
        <div ><Link to='/'className="about">HOME</Link></div>
        <div ><Link to='/about'className="about">ABOUT US</Link></div> 
        <div ><Link to='/Allnews'className="AllnewsNav">ALLNEWS</Link></div>
        {/*search functionality is important learn this*/}
         </div>
         <div className="Nextpage">
  <button onClick={handlePrevPage} disabled={page === 0} className="Previous">
    Previous Page
  </button>
  <button onClick={handleNextPage} disabled={page === nbPages - 1} className="Next">
    Next Page
  </button>
</div>
        <div className="NewsCompo" >
            <div className="News">
            <div className="Written">REACTJS</div> 
            <div className='MyStyle'>
{isError!==''&& <h1>{isError}</h1>}
{myData.slice(0,9).map((post) => (
  <div className="accordion" id="accordionExample" key={post.objectID}>
  <div className="accordion-item">
    <h2 className="accordion-header" id={`heading_${post.objectID}`}>
      <button
          className={`accordion-button ${openAccordion === post.objectID ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse_${post.objectID}`}
          // opening of the accordion is depend upon aria-expanded as it takes the boolean value
          aria-expanded={openAccordion === post.objectID ? "true" : "false"}
          aria-controls={`collapse_${post.objectID}`}
          onClick={() => handleAccordionClick(post.objectID)} // Toggle the accordion open/close
      >
        <strong>{post.title}</strong>
      </button>
    </h2>
    <div
      id={`collapse_${post.objectID}`}
      className={`accordion-collapse collapse ${openAccordion === post.objectID ? "show" : ""}`}
      aria-labelledby={`heading_${post.objectID}`}
      data-bs-parent="#accordionExample"
    >
        <div className="accordion-body">
            <p>
              By Author: <span>{post.author},<br/> </span>
              <span>Total Comments: {post.num_comments}.</span>
            </p>
            <div>
              <a href={post.url} target='_main'>
               <button className='btn btn-primary'> Read More</button>
              </a>
              <a href='/' className='Remove'onClick={() => handleRemove(post.objectID)}>
               <button className='RemoveButton'>Remove</button> 
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
))}

      </div>
    
            </div>
        </div>
        </>
    )
}