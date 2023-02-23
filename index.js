const element = (
  // Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="mainHeading">Congrtulations</h1>
      <div className="card">
        <img
          className="image"
          src="https://res.cloudinary.com/dwl5qafmd/image/upload/v1677189402/myPhoto_wr26lb.jpg"
        />
        <h3>Naveen Kumar</h3>
        <p>NxtWave Disruptive Technologies Pvt Ltd.</p>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
