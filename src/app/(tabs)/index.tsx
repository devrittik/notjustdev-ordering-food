import { View } from '@/src/components/Themed';

import {products} from '../../../assets/data/products'
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[6]} />
      <ProductListItem product={products[4]} />
    </View>
  );
}
