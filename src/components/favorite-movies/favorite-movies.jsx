import { MovieCard } from "../movie-card/movie-card";
import { Row, Col} from "react-bootstrap";

export const FavoriteMovies = ({user, token, movies, updatedUser}) => {
   let search = movies.filter((movie) => user.FavoriteMovies.includes(movie._id));

   return (
      <>
      <Row>
         {search.map((movie) => (
            <Col className="mb-4" key={movie.Title} md={3}>
            <MovieCard 
            movie={movie}
            movies={movies}
            user={user}
            token={token}
            updatedUser={updatedUser} />
         </Col>
         ))}
      </Row>
      </>
   )
}