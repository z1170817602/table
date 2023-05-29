import Mock from "mockjs";

let data = Mock.mock({
  "list|100": [
    {
      //生成|num个如下格式名字的数据
      "id|+1": 1, //数字从当前数开始后续依次加一
      name: "@cname", //名字为随机中文名字
      "tuijin|0-1": 0, 
      "zhihou|0-1": 0,
      "yiwancheng|0-10": 2,
      "zongshu|0-10": 2,
      "baifenbi|1-100.2": 1 //随机生成整数部分在1-100之间的数，但小数为2位
    },
  ],
});
Mock.mock("/mock/getTable", "get", { code: 200, data: data });
