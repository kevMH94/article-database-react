import {useState, useEffect} from 'react';
import axios from 'axios';
import Article from '../components/Article'

function Status(){

    const [articleList, setArticleList] = useState([]);
    const [pub, setPub] = useState(null)

    useEffect( () =>{
        async function getData(){
        var response = await axios.get("http://localhost:4000/articles",
         {headers: {Accept: "application/json"}})
         setArticleList(response.data)
        }
        getData();
    }, [])

    function publishedHandle(e){
        e.preventDefault();
        setPub(true)


    }

    function nonPublishedHandle(e){
        e.preventDefault();
        setPub(false)
    }

    
    
    

    if(pub == null){
        return(
        <div>
            <div className="statusNav">
                <button onClick={publishedHandle}>Published Articles</button>
                <button onClick={nonPublishedHandle}>Non-Published Articles</button>
                

                      

            </div>
    

            
        </div>
        )

    }
    else if(pub == true){

        return(
            <div>
                <div className="statusNav">
                    <button onClick={publishedHandle}>Published Articles</button>
                    <button onClick={nonPublishedHandle}>Non-Published Articles</button>
                
                </div>
                <div className="statusList">
                    {   
                        articleList.map(function(i, index){
                            if(i.published == true){
                                return( 
                                    <li key={index}>
                                        {i.title}{i.published}
                                    </li>
                                    )

                            }
                            
                            })

            }
                
            </div>
    
                
            </div>
            )
    }
    else if(pub == false){
        return(
            <div>
                <div className="statusNav">
                    <button onClick={publishedHandle}>Published Articles</button>
                    <button onClick={nonPublishedHandle}>Non-Published Articles</button>
                
                </div>
                <div className="statusList">
                    {   
                        articleList.map(function(i, index){
                            if(i.published !== true){
                                return( 
                                    <li key={index}>
                                        {i.title}{i.published}
                                    </li>
                                    )

                            }
                            
                            })

            }
                
            </div>
    
                
            </div>
        )
    }

    
    
}

export default Status;