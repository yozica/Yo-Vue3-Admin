// 解释 --- 该props为侧边栏菜单的类型
// key: 唯一键 由于菜单处使用路由名作为默认值，因此唯一键设置为路由名
// label: 菜单某项名字
// iconName: 菜单某项图标名 null表示不渲染图标
// type:
//      select表示还有子项，此时需要添加children
//      divider表示分割线
//      group表示分组
//      RouterLink表示该项作为vue路由
//      a表示该项作为外部链接
//      text表示该项仅作为文本
// attributes: 该项是type配置好后该项的属性值
// children: 子项
// disabled: true表示禁用
// hidden: true表示该项隐藏
export interface menuListProps {
  key: string;
  label?: string;
  iconName: null | string;
  type: "select" | "divider" | "group" | "RouterLink" | "a" | "text";
  attributes?: Object;
  children?: menuListProps[];
  disabled?: boolean;
  hidden?: boolean;
}
