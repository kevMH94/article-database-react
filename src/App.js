import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList'
import NewArticle from './components/NewArticle'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Search from './views/Search'
import New from './views/New';
import EditPage from './views/EditPage';
import Status from './views/Status'

function App() {
  return (
    <div >
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/search" element={<Search />} />
          <Route path="/status" element={<Status />} />
          <Route path="/editpage" element={<EditPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
