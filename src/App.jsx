import './App.css';
import Title from './components/Title';
import ToDoHeading from './components/Todo-heading';
import TaskList from './components/Tasklist';

function App() {
  return (
    <div className="App">
      <Title />
      <ToDoHeading />
      <TaskList />
    </div>
  );
}

export default App;
