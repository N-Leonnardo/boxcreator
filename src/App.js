import './App.css';

import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName="Jane" lastName="Doe" age={45} hair={"Black"}/>
      <MyNewComponent firstName="John" lastName="Smith" age={88} hair={"Brown"}/>
      <MyNewComponent firstName="Millard" lastName="Fillmore" age={50} hair={"Black"}/>
      <MyNewComponent firstName="Maria" lastName="Smith" age={62} hair={"Brown"}/>
    </div>
  );
}

export default App;
