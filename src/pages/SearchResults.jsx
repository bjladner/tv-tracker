import { useState, useEffect } from 'react';
import { returnSearchResults } from '../requests';
import { useParams, useNavigate } from "react-router";
import Button from 'react-bootstrap/Button'
import Result from '../components/Result';

export default function SearchResults() {
  const { showName } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    const retreiveTvShows = async (showName) => {
      try {
        console.log(showName);
        const response = await returnSearchResults(showName);
        console.log(response);
        setSearchResults(response);
      } catch (err) {
        setError('Failed to retreive TV Show results');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    retreiveTvShows(showName);
  }, [showName]);

  const returnToMenu = () => {
    navigate(`/`)
  }

  if (loading) return <div>Loading TV Show results ...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container d-flex flex-column align-items-start justify-content-center w-100 py-5 text-white">
      <h1>Search Results for {showName}</h1>
      <h2>List of matching shows:</h2>
        <ul>
          {searchResults.map((data, index) => (
            // <li key={index}>Search Result {index}: {data.show.name}</li>
            <Result key={index} showData={data} />
          ))}
        </ul>
      <h2>End of matching shows</h2>
      <Button variant="primary" onClick={returnToMenu}>
        All Shows
      </Button>
    </div>
  )
}
