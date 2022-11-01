import {Component} from 'react'
import { navigateTo } from '@tarojs/taro';
import {View, Text} from '@tarojs/components'
import './index.scss'

const goToComponent = (name) => {
  navigateTo({
    url: `/pages/${name}/index`,
  });
};

export default class Index extends Component {
  render() {
    return (
      <>
        <View className='index'>
          <Text>Hello world!</Text>
        </View>
        <View onClick={() => goToComponent('simple')}>
          Simple EChart load
        </View>
        <View onClick={() => goToComponent('async')}>
          Async EChart load
        </View>
      </>
    )
  }
}
