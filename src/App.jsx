import './app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Pages from './components/GlobalPage/Pages';

function App() {
  return (
   
    <div className="App">
      <Header/>
      <Pages />
      <Footer/>
    </div>
  );
}

export default App;
