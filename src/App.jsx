import './App.css';
import Title from './components/Title';
import ToDoHeading from './components/Todo-heading';
import TaskList from './components/Tasklist';

function App() {
  return (
    <div className="App">
      <div className='row row-top'>
      <Title />
      <ToDoHeading />
      </div>
      <TaskList/>
    </div>
  );
}

export default App;
