import axios from 'axios'

const baseUrl = 'http://localhost:3010'

export async function addNewShow(showID) {
  try {
    const response = await axios.post(`${baseUrl}/api/tvshow/${showID}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllShows() {
  try {
    const response = await axios.get(`${baseUrl}/api/tvshows`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getOneShow(showID) {
  try {
    const response = await axios.get(`${baseUrl}/api/tvshow/${showID}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateShow(showID) {
  try {
    const response = await axios.patch(`${baseUrl}/api/tvshow/${showID}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteShow(showID) {
  try {
    const response = await axios.delete(`${baseUrl}/api/tvshow/${showID}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function returnSearchResults(showName) {
  try {
    const response = await axios.get(`${baseUrl}/api/search/${showName}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export function returnPlatform(searchData) {
  if (searchData.network) {
    return searchData.network.name;
  } else if (searchData.webChannel) {
    return searchData.webChannel.name;
  } else {
    return "Not Available";
  }
}

export async function getNextEpisode(showData) {
  if (showData._links.nextepisode) {
    const nextEpisodeData = await axios.get(showData._links.nextepisode.href);
    return nextEpisodeData.data.airdate;
  } else {
    return "N/A";
  }
}
