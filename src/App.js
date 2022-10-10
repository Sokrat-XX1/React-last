import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import BooksList from './comp/BooksList';
import BookDetails from './comp/BookDetail';

function App() {
  return (
    <div className="App">
        <Router>
          <nav>
            <Link to = "/">Main</Link>
            <div>
              <Link to = "/books">Books</Link>
            </div>
          </nav>

          <Routes>
            <Route path='/books' element = {
              <BooksList/>
            }
            />
            <Route path="/books/:id" element={
                  <BookDetails />
              } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
