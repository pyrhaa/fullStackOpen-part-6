import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { notifChange } from '../reducers/notifReducer';
/*import anecdoteService from '../services/anecdotes';*/

const AnecdoteForm = (props) => {
  const create = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    /*const newAnec = await anecdoteService.createNew(content);*/
    props.createAnecdote(content);
    props.notifChange(`<${content}> is created`, 5);
    e.target.anecdote.value = '';
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnecdote: (value) => {
      dispatch(createAnecdote(value));
    },
    notifChange: (value, time) => {
      dispatch(notifChange(value, time));
    }
  };
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default ConnectedAnecdoteForm;
