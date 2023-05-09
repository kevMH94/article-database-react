import {useEffect, useState} from 'react'
import axios from 'axios';
import Article from '../components/Article'

function Search(){
    const [articles, setArticles] = useState([])
    const [query, setQuery] = useState('')


    function handleSearchQuery(e){
        e.preventDefault()
        setQuery(e.target.value)

    }

    async function searchArticles(e){
        e.preventDefault()
        var response = await axios.get("http://localhost:4000/articles",
        {headers: {Accept: "application/json"}})
        setArticles(response.data)
    }
    return(
        <div className="searchDiv">
            <br></br>
            <div className="searchInputDiv">
                <input value={query} onChange={handleSearchQuery} />
                <button onClick={searchArticles}>Search</button>
            </div>
            <br></br>
            <br></br>
            {
                

                articles.map(function(i, index){
        
                    if((String(i.title).toLowerCase()).includes(query.toLowerCase()) && query != ""){
                        return( 
                            <div>
                                <li key={index}>
                                <Article title={i.title} published={i.published} id={i.id} body={i.body} created={i.created_at}/>
                                </li>
                                <br></br>
                            </div>
                        )}
                   })
            }
            

        </div>
    )
}
export default Search;