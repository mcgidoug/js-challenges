//   embedded spotify player for site
window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById("embed-iframe");
  let options = {
    uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
  };
  let callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};

// --------------------------------------------------------------------
// add following script and div to html

//   <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>

//   <div id="embed-iframe"></div>

// --------------------------------------------------------------------
// https://developer.spotify.com/documentation/embeds/guides/using-the-iframe-api/
