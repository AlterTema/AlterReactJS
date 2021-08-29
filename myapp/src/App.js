import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div class="generalText">Привет, меня зовут Артем</div>
        <h3 class="centerText">И это мое первое приложение на курсе ReactJS</h3>
        <h2 ><a class="endingText" href="https://github.com/AlterTema">{props.name}</a></h2>
      </header>
    </div >
  );
}

export default App;

