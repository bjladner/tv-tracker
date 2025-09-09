import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import { deleteShow, getOneShow, returnNextEpisode, updateShow } from '../requests';


export default function OneShow() {
  const { showID } = useParams();
  const [tvShow, setTvShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const retreiveTvShow = async () => {
      try {
        const response = await getOneShow(showID);
        console.log(response);
        setTvShow(response);
      } catch (err) {
        setError('Failed to retreive TV Show');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    retreiveTvShow();
  }, [showID]);
  
  const refreshData = async () => {
    try {
      await updateShow(showID);
    } catch (err) {
      setError('Failed to update TV Show');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteOneShow = async () => {
    deleteShow(tvShow._id)
    navigate(`/`)
  }

  const returnToMenu = () => {
    navigate(`/`)
  }

  if (loading) return <div>Loading TV Show ...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <div className="text-white">
    <Container>
      {tvShow.title} - {tvShow.platform}
      <Row>
        <Col xs={6} md={4}>
          <Image src={tvShow.imageLink} rounded />
        </Col>
      </Row>
      Next Episode: {returnNextEpisode(tvShow)}
      <Row>
        <Col xs={6} md={4}>
          <Button variant="primary" onClick={refreshData}>
            Refresh Data
          </Button>
          <Button variant="danger" onClick={deleteOneShow}>
            Delete Show
          </Button>
          <Button variant="primary" onClick={returnToMenu}>
            All Shows
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
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