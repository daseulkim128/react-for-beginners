import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){

    const param = useParams();
    const [detail, setDetail] = useState({});

    const getMovies = async() => {
       const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${param.id}`)).json();
       setDetail(json.data.movie);
    }

    useEffect(() => {
        getMovies();
    },[]);

    return (
            <div>
               <h1>Detail Info</h1>
                <ul>
                    <li key={detail.rating}>rating : {detail.rating} </li>
                    <li key={detail.language}>language : {detail.language}</li>
                    <li key={detail.year}>year : {detail.year}</li>
                </ul>     
            </div>
            )
}

export default Detail;