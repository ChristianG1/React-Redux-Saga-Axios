import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './redux/users/actions';
import { useEffect, useState } from 'react';
import Header from './Components/ui/Header';
import './App.css';
import Grid from './Components/characters/Grid';

function App() {
  const dispatch = useDispatch();  
  const users = useSelector(state => state.myFirstReducer.users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      dispatch(getUsersFetch());
    }, 2000);
  }, [])

  return (
    <div className="container">
      <Header loading={loading}/>
      <Grid loading={loading} items={users}/>
    </div>
  );
}

export default App;
