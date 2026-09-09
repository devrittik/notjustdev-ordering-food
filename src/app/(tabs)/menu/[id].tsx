import { View, Pressable, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'
import { Stack } from 'expo-router';
import { Product, products } from '@/assets/data/products';
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import Colors from '@/src/constants/Colors';
import Button from '@/src/components/Button';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  
  const {id} = useLocalSearchParams();
  const product: Product | undefined = products.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('M');

  const addToCart = () => {
    console.warn(`Adding to cart, Size : ${selectedSize}`);

  }

  if(!product) {
    return <Text> Product Not Found</Text>;
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title : `${product.name}`}} />
      <Image source={{ uri: product.image || defaultPizzaImage}} style={styles.image} />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => 
        <Pressable
          onPress={() => setSelectedSize(size)}
          style={[styles.size, {backgroundColor: selectedSize === size ? `${Colors.light.tint}` : "gainsboro"}]} key={size}>
          <Text style={[styles.sizeText, {color: selectedSize === size ? "white" : "black"}]}>{size}</Text>
        </Pressable>
        )}
      </View>

      <Text style={styles.price}>Price: ${product.price}</Text>
      <Button
      onPress={addToCart}
      text='Add to cart' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    // color: Colors.light.tint,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginVertical: 10
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius:25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  },
})

export default ProductDetailsScreen