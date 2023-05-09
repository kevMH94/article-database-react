import Edit from '../components/Edit'
import Article from '../components/Article'
import {Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from "react";


function EditPage(props){
    const location = useLocation()

    const [locationState, setLocationState] = useState({articleTitle: '', articleBody: '', articlePublished: '', articleId: ''})

    useEffect(() =>{
        if(location.state){
            setLocationState(location.state)
        }
    },[])

    return (

        <div className="'editPageDiv">
            <Edit title={locationState.articleTitle} published={locationState.articlePublished} id={locationState.articleId} body={locationState.articleBody} />
        </div>

    )



}

export default EditPage;