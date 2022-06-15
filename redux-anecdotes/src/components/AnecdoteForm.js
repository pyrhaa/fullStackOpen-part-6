import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { notifChange } from '../reducers/notifReducer';
/*import anecdoteService from '../services/anecdotes';*/

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const create = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    /*const newAnec = await anecdoteService.createNew(content);*/
    dispatch(createAnecdote(content));
    dispatch(notifChange(`<${content}> is created`, 5));
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

export default AnecdoteForm;
