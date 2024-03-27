import Dashboard from './pages/Dashboard';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Commits from './common/commits';
import {setCommits} from './redux/slices/commits';
import U from './common/u';
import {Commit, State} from './common/types';
import {setBenchmarks} from './redux/slices/benchmarks';
import Benchmark from "./pages/Benchmark";

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
      setLoading(false);
    })();
  }, []);

  if(loading) return(<div>
    Loading...
  </div>);
  if(page.path === 'benchmark' && page.id) return(<section>
    <Benchmark name={page.id} />
  </section>);
  return(<section>
    <Dashboard />
  </section>);
}

export default App;
