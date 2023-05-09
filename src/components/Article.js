import { useState } from "react";
import Edit from './Edit'
import axios from 'axios'
import {Link, useLocation} from 'react-router-dom'
import {Navigate} from 'react-router-dom'

function Article(props){

    const [moreInfo, setMoreInfo] = useState(true)

    var articleTitle = props.title
    var articleBody = props.body
    var articlePublished = props.published
    var articleId = props.id

    function handleShowMore(e){
        e.preventDefault()
        setMoreInfo(false)

    }

    function handleShowLess(e){
        e.preventDefault()
        setMoreInfo(true)

    }

    async function handleDelete(e){
        
        e.preventDefault();
        try{
            var response = await axios.delete("http://localhost:4000/articles/"+props.id,
            {headers: {accept: 'application/json'}}
            )
        
        alert("Article has been deleted")
        window.location.reload()

        } catch(e){
            alert("An error occured")
            
        }
    }


    if (moreInfo){
        return (
            <div className="articleDiv">
                <h3>
                    Article Title: <span style={{fontWeight: "normal"}}>{props.title}</span>
                </h3>
                <div>
                    
                    <button className={'moreButton'+props.id} onClick={handleShowMore}> View Article and Details </button>

    
                </div>
            </div>
        )

    }
    else{
        return (
            <div className="articleDiv">
                <h3>
                    Article Title: <span style={{fontWeight: "normal"}}>{props.title}</span>
    
                </h3>
                <div className="articleContents">
                    
    
                    <div className={props.id+'Content'} id="articleDetails">
                        <h4>First Uploaded:  {props.created.substr(0, 10)}  </h4>
                        <h4>{props.published ? "Publishing Status: Published "  : "Publishing Status: Not Published "}</h4>
                        <h4>Article Contents:</h4>
                        <p>{props.body}</p>
    
                    </div>
                    <Link className="editPageLink" to="/editpage" state={{articleTitle, articleBody, articleId, articlePublished}}>Edit Article</Link>|
                    <button onClick={handleDelete}>Delete Article</button>

                    {/*<Edit title={props.title} published={props.published} id={props.id} body={props.body} />*/}
                    <br></br>
                    <br></br>
                    <button className={'lessButton'+props.id} onClick={handleShowLess} > Show Less </button>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }

    
}
export default Article;