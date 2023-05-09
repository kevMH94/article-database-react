import ArticleList from '../components/ArticleList'
import { useState } from 'react';

function Home(){
    const [view, setView] = useState(false)


    function viewAll(e){
        e.preventDefault()
        setView(true)

    }
    if(view==false){

        return(
            <div className="welcomeDiv">
                <h1> Welcome to</h1>
                <h1>The Article Database</h1>
    
                <button onClick={viewAll}>View All Articles</button>
    
            </div>
        )
    }
    else{
        return(
            <div className="listDiv">
                <h1>List of Articles Available</h1>
                <br></br>
                <br></br>
    
                <ArticleList />
            </div>
        )

    }
}
export default Home;