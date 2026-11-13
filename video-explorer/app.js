const videoContainer = document.getElementById("video-container");
const searchBtn = document.getElementById("searchbtn");
const query = document.getElementById("query");

let allVideos = []; // store all fetched videos

// Fetch videos once
const fetchVideo = async () => {
  videoContainer.innerHTML = `<div class="loader"></div>`;

  try {
    const res = await fetch(
      "https://prod-main-api-704464-00tre1p1erm.compute.instacloud-edge.com/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest",
    );
    const data = await res.json();
    allVideos = data.data.data;
    displayVideos(allVideos);
  } catch (error) {
    console.error("Error:", error);
    videoContainer.innerHTML = `<p class="message" style="color:#ff6b6b;">⚠️ Failed to load videos.</p>`;
  }
};

// Display all or filtered videos
function displayVideos(videos) {
  videoContainer.innerHTML = "";

  if (videos.length === 0) {
    videoContainer.innerHTML = `<p class="message">😕 No videos found. Try a different search.</p>`;
    return;
  }

  videos.forEach((element) => {
    const item = element.items;
    const url = item.snippet.thumbnails.medium.url;

    const videoCard = document.createElement("div");
    videoCard.className = "video-card";
    videoCard.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${item.id}" target="_blank">
              <img src="${url}" alt="${item.snippet.title}" />
            </a>
            <h3>${item.snippet.title}</h3>
            <p>${item.snippet.channelTitle}</p>
          `;
    videoContainer.appendChild(videoCard);
  });
}

// Filter videos based on title only
function filterVideos() {
  const searchText = query.value.toLowerCase().trim();
  const filtered = allVideos.filter((v) => {
    const title = v.items.snippet.title.toLowerCase();
    return title.includes(searchText);
  });
  displayVideos(filtered);
}

// Event listeners
searchBtn.addEventListener("click", filterVideos);
query.addEventListener("input", filterVideos);

// Load all videos initially
fetchVideo();
