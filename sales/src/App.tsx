import ReactDOM from 'react-dom';

import './index.css';
import List from './components/List';

const App = () => (
  <div className='container'>
    <div>Name: sales</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <List />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
