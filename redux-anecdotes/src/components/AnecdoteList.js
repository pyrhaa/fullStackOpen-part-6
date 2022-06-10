import { useDispatch, useSelector } from 'react-redux';
import { voteOf } from '../reducers/anecdoteReducer';
import { notifChange } from '../reducers/notifReducer';

//I does a .slice() before the .sort() because we need to dont mutate the array so we do a copy like this.
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  const vote = (arg) => {
    const data = arg;
    dispatch(voteOf(data.id));
    dispatch(notifChange(`You voted for <${data.content}>`, 5));
  };

  return (
    <div>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => {
                  vote(anecdote);
                }}>
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
