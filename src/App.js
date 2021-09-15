import './App.css';


function App() {
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar scroll</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav  mr-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
