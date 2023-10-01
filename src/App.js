import './App.css';
import BasicHeader from './components/header/BasicHeader';
import MainPage from './components/main/MainPage';
import BasicFooter from './components/footer/BasicFooter';

function App() {
  return (
    <div className="App">
      <BasicHeader />
      <MainPage />
      <BasicFooter />
    </div>
  );
}

export default App;
