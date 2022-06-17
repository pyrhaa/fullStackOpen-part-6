import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    const filtered = e.target.value;
    props.setFilter(filtered);
  };
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = {
  setFilter
};

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default ConnectedFilter;
