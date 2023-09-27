import React from 'react';
import "./Home.scss";
import Filter from '../../components/input/filter/Filter';
import Search from '../../components/input/search/Search';
import Country from '../../components/country/Country';

const Home = () => {
  return (
    <section className='home-page-container'>
      <div className='input-container'>
      <Search></Search>
      <Filter></Filter>
      </div>
      <Country></Country>
    </section>
  )
}

export default Home
