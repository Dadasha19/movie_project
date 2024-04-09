function Movie (props) {

    const {
        title: title,
        name: name,
        poster_path: poster,
        id: idMovie,
        overview: overview
    } = props;

    const trimDescription = (description, maxLength) => {
      if (description.length > maxLength) {
        return description.slice(0, maxLength) + '...';
      }
      return description;
    };

    return <div className="card movie_more" id={idMovie}>
    <div className="movie_img">
      {
        poster === 'N/A' ?
          <img src={`https://placehold.co/300x450?text=${title}`} alt={title} />
          :
          <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
      }
    </div>
    <div className="card-body">
      {title ? (
        <h5 className="card-title">{title}</h5>
      ) : (
        <h5 className="card-title">{name}</h5>
      )}
      <p className="card-text">{trimDescription(overview, 110)}</p>
    </div>
  </div>
}
export {Movie}
