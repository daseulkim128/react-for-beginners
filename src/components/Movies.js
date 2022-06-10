import PropTypes from "prop-types"
import {Link} from "react-router-dom";

function Movie({id, medium_cover_image, title, summary, genres}){

    return (
     
            <div>
                <img src={medium_cover_image} alt="movie poster"/>
                <h2>{title}</h2>
                <Link to={`/detail/${id}`}><p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p></Link>
                <ul>
                    {genres.map((g)=>(
                    <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
            )
}

Movie.propTypes = {
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;