import Echarts from 'taro-react-echarts';
import echarts from '../../assets/js/echarts';

const Index = () => {
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

  return (
    <Echarts
      echarts={echarts}
      option={option}
      onChartReady={() => {
        console.log(`### onChartReady`);
      }}
    ></Echarts>
  );
};

export default Index;
