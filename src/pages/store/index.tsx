import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Store() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='store'>
      <Text>Hello world!</Text>
    </View>
  )
}
