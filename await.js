// TODO explain with comments
async function getLatestLaunches() {
  let response = await axios.get(
    "https://api.spacexdata.com/v3/launches/latest"
  );
  let data = await response.data;
  let missionName = data.mission_name;
  let details = data.details;
  let flightNumber = data.flight_number;
  let rocketType = data.rocket.rocket_type;
  let rocketName = data.rocket.rocket_name;
  let images = data.links.flickr_images;

  document.getElementById("mission_name").innerText = missionName;
  document.getElementById("details").innerText = details;
  document.getElementById("flight_number").innerText = flightNumber;
  document.getElementById("rocket_name").innerText = rocketName;
  document.getElementById("rocket_type").innerText = rocketType;

  // working with the video url supplied by the api call
  video = document.getElementById("video");
  // need to replace "watch" with embed
  let watchString = data.links.video_link;
  let embedString = watchString.replace("watch", "embed");
  // setting the source of the video to be that of the string
  video.setAttribute("src", embedString);

  // working with the images from the API
  imageContainer = document.querySelector(".image-container");
  // iterating over each of the images, creating a img element and then appending the element to the imageContainer
  images.forEach(image => {
    let imageTag = document.createElement("img");
    imageTag.src = image;
    imageContainer.appendChild(imageTag);
  });
  return data;
}

async function getHistoryLaunches() {
  // fetch data from a url endpoint
  const response = await axios.get("https://api.spacexdata.com/v3/history");
  const data1 = await response; //axios has access to the response body and its somehow doing stuff
  // console.log(data1);
  return data1;
}
getHistoryLaunches();
