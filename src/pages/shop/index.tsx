import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Shop() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='shop'>
      <Text>Hello world!</Text>
    </View>
  )
}
