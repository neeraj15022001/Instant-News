var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("./localapi.json", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    // console.log(result);
    if (result.status == "ok") {
      const articles = result.articles;
      articles.forEach((article) => {
        postMessage(article);
        //   const title = article.title;
        //   const description = article.description;
        //   const url = article.urlToImage;
        //   const source = article.source.name;
        //   addElement(title, description, url, source);
      });
      // setTimeout(() => stopWorker(), 5000);
    }
  })
  .catch((error) => console.log("error", error));
