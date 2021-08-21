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
        console.log(article.title);
        console.log(article.description);
        console.log(article.urlToImage);
        console.log(article.source.name);
      });
    }
  })
  .catch((error) => console.log("error", error));
