import {useEffect, useState} from 'react';
import axios from 'axios';

function NewArticle(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [published, setPublished] = useState('');
    const [result, setResult] = ('');

    function handleTitle(e){
        e.preventDefault();
        setTitle(e.target.value)

    }
    function handleBody(e){
        e.preventDefault();
        setBody(e.target.value)

    }
    function handlePublished(e){
        e.preventDefault();
        if (e.target.value == null){
            setPublished(false)
        }
        else{
            setPublished(true)
        }

    }

    async function handleSubmit(e){
        
        e.preventDefault();
        try{
        var response = await axios.post("http://localhost:4000/articles",
        {title: title, body: body, published: published},
        {headers: {accept: 'application/json'}}
        )
        var data = response.data
        
        alert("Article has been Submitted")
        setTitle('')
        setBody('')
        setPublished(false)

        } catch(e){
            alert("An error occured")
            
        }
    }

    return(
        <div className="newArticleDiv">
            <lable>
                Title:
                <input value={title} type="text" onChange={handleTitle}/>
            </lable>
            <br></br>
            <br></br>
            <label>
                Body:
                <br></br>
                <textarea value={body} type="text" onChange={handleBody}/>
            </label>
            <br></br>
            <br></br>
            <label>
                Published:
                <input value={published} type="checkbox" onChange={handlePublished} />
            </label>
            <br></br>
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )

}

export default NewArticle;