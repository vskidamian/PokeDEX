import React, { useState, useEffect, Component } from 'react';
import { getAllPokemon, getPokemon } from './Services/pokemon.js';
import Card from './Components/Card';
import NavBar from './Components/Navbar';
import Loading from './Components/Loading';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }



  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))
    setPokemonData(_pokemonData);
  }
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        {loading ? <Loading /> : (
          <React.Fragment>
            <div className="main-container">
              <div className="flex-container">
                {pokemonData.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon} />
                })}
                <div className="btn">
                  <div className="btn-prev">
                    <button onClick={prev}><i class="fas fa-angle-left"></i></button>
                  </div>
                  <div className="btn-next">
                    <button onClick={next}><i class="fas fa-angle-right"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    </div>
  );
}

export default App;
