import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Commits from './common/commits';
import {setCommits} from './redux/slices/commits';
import U from './common/u';
import {Commit, State} from './common/types';
import {setBenchmarks} from './redux/slices/benchmarks';
import {Benchmark, Dashboard} from './pages';
import {Loader} from './components';


function App() {
  const dispatch = useDispatch();
  const page = useSelector((state: State) => state.page);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function() {
      const response = await Commits.getAll();
      if(response.code !== 200) return;
      const commits = U.wrapper<Commit[]>(response.data);
      dispatch(setCommits(commits));
      const benchmarks = commits.map(commit => commit.benchmark);
      dispatch(setBenchmarks(U.removeDuplicates<string>(benchmarks)));
      await U.sleep(1);
      setLoading(false);
    })();
  }, []);

  if(loading) return(<Loader />);
  if(page.path === 'benchmark' && page.id) return(<Benchmark name={page.id} />);
  return(<Dashboard />);
}

export default App;
