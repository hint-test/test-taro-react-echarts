import {useEffect, useState} from 'react';
import Echarts from 'taro-react-echarts';
import {View} from "@tarojs/components";
import echarts from '../../assets/js/echarts';

const Index = () => {
  const [containerReady, setContainerReady] = useState(false);
  const [asyncReady, setAsyncReady] = useState(false);
  const option = {
    legend: {
      top: 50,
      left: 'center',
      z: 100,
    },
    tooltip: {
      trigger: 'axis',
      show: true,
      confine: true,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  useEffect(() => {
    console.log('### onInit');
    setContainerReady(true);
    setTimeout(() => {
      setAsyncReady(true);
    }, 1000);
  }, []);

  return (
    <>
      <View>Async render</View>
      <View>
        {
          containerReady ? (
            <>
              <View>Render when containerReady</View>
              <Echarts
                echarts={echarts}
                option={option}
                onChartReady={() => {
                  console.log(`### onChartReady`);
                }}
              ></Echarts>
            </>
          ) : (
            ''
          )
        }
      </View>
      <View>
        {
          asyncReady ? (
            <>
              <View>Render when asyncReady</View>
              <Echarts
                echarts={echarts}
                option={option}
                onChartReady={() => {
                  console.log(`### onChartReady`);
                }}
              ></Echarts>
            </>
          ) : (
            ''
          )
        }
      </View>
    </>
  );
};

export default Index;
