import {HashRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Commits from './common/commits';
import {setCommits} from './redux/slices/commits';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function() {
      const response = await Commits.getAll();
      if(response.code !== 200) return;
      dispatch(setCommits(response.data));
    })();
  }, []);

  return (<HashRouter>
    <Routes>
      <Route path={''} element={<Dashboard />} />
      <Route path={'*'} element={<div>Error 404: Page Not Found</div>} />
    </Routes>
  </HashRouter>);
}

export default App;
