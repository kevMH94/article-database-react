import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Article from './Article'

function Edit(props){
    const [edit, setEdit] = useState(true)
    const [title, setTitle] = useState(props.articleTitle);
    const [body, setBody] = useState(props.articleBody);
    const [published, setPublished] = useState(props.articlePublished);

    function handleEdit(){
        setEdit(false)
    }

    function handleTitle(e){
        e.preventDefault()
        setTitle(e.target.value)

    }
    function handleBody(e){
        e.preventDefault()
        setBody(e.target.value)

    }
    function handlePublished(e){
        e.preventDefault()
        if (e.target.value == null){
            setPublished(false)
        }
        else{
            setPublished(true)
        }

    }

    async function handleUpdate(e){
        console.log(title + " "+ body+ " body should be before here")
        
        e.preventDefault();
        try{
        var response = await axios.put("http://localhost:4000/articles/"+props.id,
        {title: title, body: body, published: published},
        {headers: {accept: 'application/json'}}
        )
        var data = response.data
        
        alert("Article has been Updated")
        

        } catch(e){
            alert("An error occured")
            
        }
    }

   
        return(
            <div>
    
                <div className="editDiv">
                    <lable>
                        Title:
                        <input defaultValue={props.title} type="text" onChange={handleTitle}/>
                    </lable>
                    <br></br>
                    <br></br>
                    <label>
                        Body:
                        <textarea defaultValue={props.body} type="text" onChange={handleBody}/>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Published:
                        <input defaultValue={props.published} type="checkbox" onChange={handlePublished} />
                    </label>
                    <br></br>
                    <button onClick={handleUpdate}> Update</button>

                    <Link to="/">Return to Home</Link>
                    
                </div>
            </div>
        )

    
    

}

export default Edit;