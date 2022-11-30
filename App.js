import React from "react";
import SearchBar from "./app/components/SearchBar";
import Screen from "./app/components/Screen";
import FeaturedNews from "./app/components/FeaturedNews";
import BreakingNews from "./app/components/BreakingNews";
import data from './fakeData'
import TechNews from "./app/components/TechNews";

export default function App() {
  
  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech')
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews 
      item={{id: '2',
      title: 'This is the title no two.',
      desc:
          'Desc is the short form of description and this format is the actual same as our real database.',
      thumbnail: 'http://lorempixel.com/400/200/',
      }}
      />
      <BreakingNews  data={breakingNews}/>
      <TechNews data={techNews} />
    </Screen>
  );
};
