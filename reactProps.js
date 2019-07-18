const kitten = {imgSrc: "http://placekitten.com/200/300",
               name: "Baroness von Muahaha",
               description: "This kitty is pretty"};

const jsxExpr = (
  <div className="profile">
    <img src={kitten.imgSrc} />
    <h4> {kitten.name}</h4>
    <p>{kitten.description}</p>
  </div>
);

const root = document.getElementById("root");

ReactDOM.render(jsxExpr, root);
