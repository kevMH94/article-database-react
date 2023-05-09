import {useState, useEffect} from 'react';
import axios from 'axios';
import Article from './Article'

function ArticleList(){
    const [articleList, setArticleList] = useState([]);

    useEffect( () =>{
        async function getData(){
        var response = await axios.get("http://localhost:4000/articles",
         {headers: {Accept: "application/json"}})
         setArticleList(response.data)
        }
        getData();
    }, [])

    return(
        <div className="articleListDiv">
           <ul>
               {
                  articleList.map(function(i, index){
                   return( 
                    <li key={index}>
                        <Article title={i.title} published={i.published} id={i.id} body={i.body} created={i.created_at}/>
                    </li>
                   )
                  })
               }
           </ul>
        </div>
    )

}

export default ArticleList;