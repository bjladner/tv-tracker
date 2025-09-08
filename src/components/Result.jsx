// import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router'
import { addNewShow, returnPlatform } from '../requests'
// import { updateShow } from '../requests';

export default function Result({ showData }) {
  // const [tvShow, setTvShow] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);


  // useEffect(() => {
  //   const retreiveTvShows = async () => {
  //     try {
  //       const response = await updateShow(showData._id);
  //       console.log(response);
  //       setTvShow(response);
  //     } catch (err) {
  //       setError('Failed to retreive TV Show');
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   retreiveTvShows();
  // }, []);

  // if (loading) return <div>Loading TV Show ...</div>;
  // if (error) return <div>{error}</div>;

  const addTvShow = () => {
    addNewShow(showData.show.id)
  }

  return (
    <li>
      <Link to={`/tvshow/${showData._id}/`}>{showData.show.name}</Link> - {returnPlatform(showData.show)} - {showData.nextEpisode}
      <Button variant="primary" onClick={addTvShow}>
        Add Show
      </Button>
    </li>
  )
}


// {
//   "_id":"68b4784c4cc9224a54fab221",
//   "title":"Slow Horses",
//   "tvMazeID":45039,
//   "scheduleDay":["Wednesday"],
//   "platform":"Apple TV+",
//   "imageLink":"https://static.tvmaze.com/uploads/images/medium_portrait/531/1328385.jpg",
//   "nextEpisode":"2025-09-24T00:00:00.000Z",
//   "__v":0
// }