import axios from "axios";
import header from "../../components/header";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyAdOh7rB23rL5kd2dw30UyFBZrjhpP4l0Q";

const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask":
      "places.displayName,places.formattedAddress,places.location,places.photos,places.shortFormattedAddress,",
  },
};

const NewNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
  NewNearByPlace,
  API_KEY,
};
