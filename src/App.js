import logo from './logo.svg';
import './App.css';
import { moviesData } from './data';
import MovieList from './components/MovieList';
import { useState } from 'react';
import Search from './components/Search';
import NewMovie from './components/NewMovie';



function App() {
const [movieList, setMovieList] = useState(moviesData)
const [text, setText] = useState('')
const [rating, setRating] = useState(1)

const handleChange = (e) => setText(e.target.value)

const handleAdd = (newMovie) => setMovieList([...movieList,newMovie])

const handleRating = (x) => setRating(x)

  return(
<div className="App">
  <Search  text={text} handleChange={handleChange} rating={rating}  handleRating={handleRating} />
<MovieList   movies={movieList.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rating)}  />
<NewMovie add={handleAdd} />
</div>

  )
}  
 
export default App;
