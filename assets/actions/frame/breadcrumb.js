export const INIT_LIST_BREADCRUMB = "INIT_LIST_BREADCRUMB";

export function initList( list = []){
	return {
		type : INIT_LIST_BREADCRUMB,
		list
	}
}