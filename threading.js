// Web Worker
var w;

function startWorker() {
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      w = new Worker("api.min.js");
    }
    w.onmessage = function (event) {
    //   console.log("in on message")
      const article = event.data;
    //   console.log("printing article data received in thread" + article)
      addElement(article.title, article.description, article.urlToImage, article.source.name);
    };
  } else {
      console.log("Sorry! No Web Worker support.");
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

function addElement(title, description, url="", source) {
    let element = `<div class="card">
          <div class="card-image" style="background: lightgray url('${url}') no-repeat center;background-size: cover;">
              <div class="card-tag">${source}</div>
          </div>
          <div class="card-content">
              <div class="card-headline">${title}</div>
              <div class="card-description">${description}</div>
          </div>
      </div>`;
    const container = document.querySelector(".card-container");
    container.innerHTML += element;
  }