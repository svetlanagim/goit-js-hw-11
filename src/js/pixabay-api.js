import axios from "axios";

const API_KEY = "54666795-342cd36b10c863945e9f956f4";

export async function getImagesByQuery(query) {

  const BASE_URL = "https://pixabay.com/api/";

  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data;

}
