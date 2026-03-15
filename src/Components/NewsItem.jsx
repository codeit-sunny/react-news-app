const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 h-100"
      style={{ maxWidth: "350px" }}
    >
      <img
        src={src ? src : "https://via.placeholder.com/350x200"}
        style={{ aspectRatio:"1/1", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />

      <div className="card-body d-flex flex-column px-3 py-2">
        <h5 className="card-title fw-bold ">
          {title ? title.slice(0, 50) : "No Title"}
        </h5>

        <p className="card-text flex-grow-1" style={{fontSize:"14px", fontWeight:"400"}}>
          {description ? description.slice(0, 90) : "No Description"}
        </p>

        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;