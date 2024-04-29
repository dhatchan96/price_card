import Cardbody from "./card_body";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="col">
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{props.plan}</h4>
        </div>
        <Cardbody {...props}/>
      </div>
    </div>
  );
};

Card.propTypes = {
    plan: PropTypes.string,
    planlist: PropTypes.array,
  };


export default Card;
