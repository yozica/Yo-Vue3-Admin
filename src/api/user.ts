import request from "@/utils/request";
import { menuListProps } from "@/type";

// 登录
export const login = (data: { username: string; password: string }) => {
  request;
  // return request({
  //   url: "user/login",
  //   method: "post",
  //   data,
  // });

  if (data.username === "yozica" && data.password === "123456") {
    return new Promise((resolve) => {
      resolve({
        code: 0,
        msg: "登录成功",
        data: {
          token: "Bear dwandjwabdkawwh",
        },
      });
    });
  } else {
    return new Error("密码错误");
  }
};

// 模拟异步请求获取菜单
export const getMenuList = () => {
  return new Promise((resolve) => {
    const menuList: menuListProps[] = [
      {
        key: "Home",
        label: "首页",
        iconName: "HomeIcon",
        type: "RouterLink",
        attributes: {
          to: {
            name: "Home",
          },
        },
      },
      {
        key: "Test",
        label: "测试",
        iconName: "BuildOutline",
        type: "select",
        children: [
          {
            key: "Test1",
            label: "测试1",
            iconName: null,
            type: "RouterLink",
            attributes: {
              to: {
                name: "Test1",
              },
            },
          },
          {
            key: "Test2",
            label: "测试2",
            iconName: null,
            type: "RouterLink",
            attributes: {
              to: {
                name: "Test2",
              },
            },
          },
          {
            key: "Test3",
            label: "测试3",
            iconName: null,
            type: "RouterLink",
            attributes: {
              to: {
                name: "Test3",
              },
            },
          },
        ],
      },
    ];

    resolve({
      code: 0,
      msg: "",
      data: menuList,
    });
  });
};

// menuList示例
// const menuList: menuListProps[] = [
//   {
//     key: "home",
//     label: "首页",
//     iconName: "HomeIcon",
//     type: "RouterLink",
//     attributes: {
//       to: {
//         name: "Home",
//       },
//     },
//   },
//   {
//     key: "divider-1",
//     type: "divider",
//     iconName: null,
//     attributes: {
//       style: {
//         marginLeft: "32px",
//       },
//     },
//   },
//   {
//     key: "hear-the-wind-sing",
//     label: "且听风吟",
//     iconName: "BookIcon",
//     type: "a",
//     attributes: {
//       href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
//       target: "_blank",
//       rel: "noopenner noreferrer",
//     },
//     hidden: true,
//   },
//   {
//     key: "pinball-1973",
//     label: "1973年的弹珠玩具",
//     iconName: "BookIcon",
//     type: "select",
//     children: [
//       {
//         key: "rat",
//         label: "鼠",
//         iconName: null,
//         type: "text",
//       },
//     ],
//   },
//   {
//     key: "a-wild-sheep-chase",
//     label: "寻羊冒险记",
//     iconName: "BookIcon",
//     type: "text",
//     disabled: true,
//   },
//   {
//     key: "dance-dance-dance",
//     label: "舞，舞，舞",
//     iconName: "BookIcon",
//     type: "select",
//     children: [
//       {
//         key: "people",
//         label: "人物",
//         iconName: null,
//         type: "group",
//         children: [
//           {
//             key: "narrator",
//             label: "叙事者",
//             iconName: "PersonIcon",
//             type: "text",
//           },
//           {
//             key: "sheep-man",
//             label: "羊男",
//             iconName: "PersonIcon",
//             type: "text",
//           },
//         ],
//       },
//       {
//         key: "eat",
//         label: "食用",
//         iconName: null,
//         type: "group",
//         children: [
//           {
//             key: "beverage",
//             label: "饮品",
//             iconName: "WineIcon",
//             type: "select",
//             children: [
//               {
//                 key: "whisky",
//                 label: "威士忌",
//                 iconName: null,
//                 type: "text",
//               },
//             ],
//           },
//           {
//             key: "food",
//             label: "食物",
//             iconName: null,
//             type: "select",
//             children: [
//               {
//                 key: "sandwich",
//                 label: "三明治",
//                 iconName: null,
//                 type: "text",
//               },
//             ],
//           },
//           {
//             key: "the-past-increases-the-future-recedes",
//             label: "过去增多, 现在减少",
//             iconName: null,
//             type: "text",
//           },
//         ],
//       },
//     ],
//   },
// ];
