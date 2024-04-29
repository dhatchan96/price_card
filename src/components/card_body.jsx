import PropTypes from "prop-types";

const Cardbody = (props) => {
    return (
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{props.price}</h1>
          <ul className="list-unstyled mt-3 mb-4">
            {props.planlist.map((plan, i) => {
              return plan.isEnabled ? (
                <li key={i}>
                  <p className="text-dark"><i className="fa-solid fa-check"></i> {plan.name}</p>
                </li>
              ) : (
                <li key={i}>
                  <p className="text-muted">
                    <i className="fa-solid fa-times"></i> {plan.name}
                  </p>
                </li>
              );
            })}
          </ul>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
    )
};

Cardbody.propTypes = {
    price: PropTypes.string,
    planlist: PropTypes.array,
  };

export default Cardbody;