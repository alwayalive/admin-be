//Action 类型
export const SWITCH_TAB = 'SWITCH_TAB';
export const DISPAY_ARROWS = 'DISPAY_ARROWS';
export const ADD_TAB = 'ADD_TAB';
export const REMOVE_TAB = 'REMOVE_TAB';
export const DEFAULT_INDEX_TAB = 'INDEX_TAB';

export const list = [{
    title: "我的主页",
    href: "/"
}/*, {
    title: "产品页",
    href: "/product"
}*/]

/*
 *Action 函数
 */
// 切换标签
export function switchTab(selected = 0) {
    return {
        type: SWITCH_TAB,
        selected,
    }
}

//显示标签栏左右箭头
export function dispayArrows(direction = 0) { //arrowState = [ "none" , "left" , "right", "both"]
    return {
        type: DISPAY_ARROWS,
        direction,
    }
}
// 添加标签
export function addTab(tab) {
    return {
        type: ADD_TAB,
        tab
    }
}

// 删除标签
export function removeTab( index ) {
    return {
        type: REMOVE_TAB,
        index
    }
}

// 首页标签，不可以删除，默认显示
export function defaultIndexTab() {
    return {
        type: DEFAULT_INDEX_TAB,
        indexTab: 0,
    }
}
