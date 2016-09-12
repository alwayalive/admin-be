export const CLICK_MENU = "CLICK_MENU";
export const LOAD_LEFT_MENU = "LOAD_LEFT_MENU";
export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";
export const HOVER_MENU = "HOVER_MENU";

export function loadLeftMenu( menuList = {} ){
	return {
		type : LOAD_LEFT_MENU,
		menuList
	}
}

export function clickMenu( selected = [0] ){
	return {
		type : CLICK_MENU,
		selected,
	}
}

export function openMenu(){
	return {
		type : OPEN_MENU
	}
}
export function closeMenu(){
	return {
		type : CLOSE_MENU
	}
}

export function hoverMenu( coord ){
	return {
		type : HOVER_MENU,
		coord
	}
}