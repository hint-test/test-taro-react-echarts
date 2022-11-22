import { useState } from "react";
import "taro-react-table/dist/index.css";
import Table from "taro-react-table";

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const initData = [];
  for (let i = 0; i < 10; i++) {
    initData.push({
      name1: `无人之境${i}`,
      name2: `打回原形${i}`,
      name3: `防不胜防${i}`,
      name4: `十面埋伏${i}`,
      name5: `我不知道${i}`,
      name6: `你知道吗${i}`,
      name7: `都不知道${i}`,
      name8: `天知道${i}`,
      name9: `无人之境${i}`,
      name10: `打回原形${i}`,
      name11: `防不胜防${i}`,
      name12: `十面埋伏${i}`,
      name13: `我不知道${i}`,
      name14: `你知道吗${i}`,
      name15: `都不知道${i}`,
      name16: `天知道${i}`,
    });
  }
  const [dataSource, setDataSource] = useState(initData);
  const [loadStatus, setLoadStatus] = useState(null);
  const [sortInfo, setSortInfo] = useState({
    field: "name1",
    order: "ascend",
  });

  const columns = [
    {
      title: "首",
      dataIndex: "name1",
      sorter: true,
      fixed: "left",
      sortOrder: sortInfo.field === "name1" && sortInfo.order,
    },
    {
      title: "二列",
      dataIndex: "name2",
    },
    {
      title: "这列比较长文字比较多",
      dataIndex: "name3",
    },
    {
      title: "第四列",
      dataIndex: "name4",
    },
    {
      title: "第5列",
      dataIndex: "name5",
    },
    {
      title: "第6列",
      dataIndex: "name6",
    },
    {
      title: "第7列",
      dataIndex: "name7",
    },
    {
      title: "第8列",
      dataIndex: "name8",
    },
    {
      title: "首",
      dataIndex: "name9",
      sorter: true,
      sortOrder: sortInfo.field === "name9" && sortInfo.order,
    },
    {
      title: "二列",
      dataIndex: "name10",
    },
    {
      title: "这列比较长文字比较多",
      dataIndex: "name11",
    },
    {
      title: "第四列",
      dataIndex: "name12",
    },
    {
      title: "第5列",
      dataIndex: "name13",
    },
    {
      title: "第6列",
      dataIndex: "name14",
    },
    {
      title: "第7列",
      dataIndex: "name15",
    },
    {
      title: "第8列",
      dataIndex: "name16",
    },
  ];

  const getList = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const list = [...dataSource];
        const pageSize = 10;
        for (let i = 1; i < pageSize; i++) {
          const size = list.length + 1;
          list.push({
            name1: `无人之境${size}`,
            name2: `打回原形${size}`,
            name3: `防不胜防${size}`,
            name4: `十面埋伏${size}`,
            name5: `十面埋伏${size}`,
            name6: `十面埋伏${size}`,
            name7: `十面埋伏${size}`,
            name8: `十面埋伏${size}`,
            name9: `无人之境${size}`,
            name10: `打回原形${size}`,
            name11: `防不胜防${size}`,
            name12: `十面埋伏${size}`,
            name13: `十面埋伏${size}`,
            name14: `十面埋伏${size}`,
            name15: `十面埋伏${size}`,
            name16: `十面埋伏${size}`,
          });
        }
        resolve(list);
      }, 1000);
    });
  };

  const onLoad = async () => {
    setLoadStatus("loading");
    const list = await getList();
    setDataSource(list);
    setLoadStatus(list.length > 20 ? "noMore" : null);
  };

  // 排序回调
  const onSorter = ({ column, field, order }) => {
    console.log(column, field, order);
    // 模拟排序加载效果
    setLoading((state) => !state);
    setSortInfo({ order, field });
    const tempList = [...dataSource];
    setTimeout(() => {
      setLoading(false);
      tempList.reverse();
      setDataSource(tempList);
    }, 1000);
  };

  return (
    <Table
      loading={loading}
      dataSource={dataSource}
      columns={columns}
      style={{ height: "500px" }}
      onLoad={onLoad}
      loadStatus={loadStatus}
      onSorter={onSorter}
    />
  );
}
