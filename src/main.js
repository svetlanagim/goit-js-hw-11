import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from "./js/render-functions.js";

import { getImagesByQuery } from "./js/pixabay-api.js";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {

  event.preventDefault();

  const query =
    event.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      message: "Please enter search text!"
    });
    return;
  }

  clearGallery();

  showLoader();

  try {

    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {

      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });

      return;
    }

    createGallery(data.hits);

  } catch (error) {

    iziToast.error({
      message: "Error loading images",
    });

  } finally {

    hideLoader();

  }

}
