function fetchData() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("./localapi.json", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.status == "ok") {
        const articles = result.articles;
        articles.forEach((article) => {
          const title = article.title;
          const description = article.description;
          const url = article.urlToImage;
          const source = article.source.name;
          addElement(title, description, url, source);
        });
      }
    })
    .catch((error) => console.log("error", error));
}
function addElement(title, description, url, source) {
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
fetchData();
