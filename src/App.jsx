import price from "./constants/price";
import Card from "./components/card";

import './pricing.css'

function App() {
  return (
    <>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="text-dark">REACT PRICE CARD MODAL</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          {price.map((val, i) => {
            return <Card key={i} {...val} />;
          })}
          ;
        </div>
      </div>
    </>
  );
}

export default App;
