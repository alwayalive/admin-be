import { combineReducers } from 'redux'
import { fromJS } from 'immutable'
import { LOADING_TABLE_PRODUCTION, DATA_SOURCE_TABLE_PRODUCTION, PAGINATION_TABLE_PRODUCTION, BORDERED_TABLE_PRODUCTION, SCROLL_TABLE_PRODUCTION, SIZE_TABLE_PRODUCTION, initialState } from 'actions/product/list.js'

function productList( state = initialState , action ){
	let immutableObj;
	switch( action.type ){
		// Table组件加载层
		case LOADING_TABLE_PRODUCTION:
			immutableObj = fromJS( state );
			return immutableObj.updateIn(['loading'], () => action.loading).toJS();
		// Table组件数据源
		case DATA_SOURCE_TABLE_PRODUCTION:
			immutableObj = fromJS( state );
			return immutableObj.updateIn(['dataSource'], () => action.dataSource).toJS();
		// Table组件分页组件参数
		case PAGINATION_TABLE_PRODUCTION:
			immutableObj = fromJS( state );
			return immutableObj.updateIn(['pagination'], () => action.pagination).toJS();
		// Table组件边框
		case BORDERED_TABLE_PRODUCTION:
			immutableObj = fromJS( state );
			return immutableObj.updateIn(['bordered'], () => action.bordered).toJS();
		// Table组件Table-body 的max-height和max-width
		case SCROLL_TABLE_PRODUCTION:
			immutableObj = fromJS( state );
			return immutableObj.updateIn(['scroll'], () => action.scroll).toJS();
		// Table组件尺寸样式
		case SIZE_TABLE_PRODUCTION:
			immutableObj = fromJS( state );
			return immutableObj.updateIn(['size'], () => action.size).toJS();
		default:
			return state;
	}
}

export default combineReducers({
	productList
})