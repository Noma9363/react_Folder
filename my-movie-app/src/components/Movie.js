import { Link } from "react-router-dom";
import propTypes from "prop-types";
//ㄴpropTypes 앞에 소문자로 하기 그래야 에러 안남 이유는?
function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}> 
                    {title}
                </Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}
//
Movie.propTypes ={
    id : propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;