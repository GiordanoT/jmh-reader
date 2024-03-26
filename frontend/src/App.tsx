import Database from './common/Database';

function App() {

  const write = async() => {
    const db = new Database();
    await db.write('test', 15);
  }

  return (<div className={'p-2'}>
    <button className={'p-1 bg-green-300'} onClick={write}>write</button>
  </div>);
}

export default App;
