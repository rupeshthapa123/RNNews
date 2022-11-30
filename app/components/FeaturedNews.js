import { View, Text } from 'react-native'
import React from 'react'
import BlockCard from './BlockCard'

const FeaturedNews = ({item}) => {
  return <BlockCard item={item} style={{marginVertical: 15}}/>
};

export default FeaturedNews;