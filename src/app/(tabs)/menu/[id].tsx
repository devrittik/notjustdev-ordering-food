import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'
import { Stack } from 'expo-router';
import { products } from '@/assets/data/products';

const ProductDetailsScreen = () => {
  
  const {id} = useLocalSearchParams();
  
  return (
    <View>
      <Stack.Screen options={{ title : `${products[id-1].name}`}} />
      <Text style={{fontSize: 20}}>ProductDetailsScreen for id : {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen