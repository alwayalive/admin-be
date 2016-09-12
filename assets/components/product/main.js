import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Table } from 'antd'
import Fieldset from 'commons/fieldset.js'
import Search from './search.js'
import { loadingState, initDataSource, initPagination, changeScroll } from 'actions/product/list.js'
import { is } from 'immutable'

const _pagination = {
    onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
    },
    onChange(current) {
        console.log('Current: ', current);
    },
};

const columns = [{
        title: '姓名',
        dataIndex: 'name',
        width:150,
    }, {
        title: '年龄',
        dataIndex: 'age',
        width:150,
    }, {    
        title: '联系方式',
        dataIndex: 'phone',
        width:150,
    }, {    
        title: '住址',
        dataIndex: 'address',
    }
];

export default connect( state => ({
    contentHeight : state.store.frame.main.contentHeight,
    dataSource : state.store.product.productList.dataSource,
    loading : state.store.product.productList.loading,
    pagination : state.store.product.productList.pagination,
    bordered : state.store.product.productList.bordered,
    scroll : state.store.product.productList.scroll,
    size : state.store.product.productList.size,
}))(React.createClass({
    componentDidMount(){
        let { dispatch, pagination } = this.props;
        // 异步加载数据
        fetch(`/users/getUsersList`)
        .then( response => response.json() )
        .then( json => {
            dispatch( initDataSource( json ) );
            _pagination.total = json.length;
            dispatch( initPagination( Object.assign( {} , pagination, _pagination ) ) );
            dispatch( loadingState( false ) );
        });
    },
    shouldComponentUpdate(nextProps, nextState){
        if( !is( this.props, nextProps ) )
            return true;
        return false;
    },
    componentWillUpdate( nextProps ){
        // 计算Table组件的table-body max-height，保证在table数据比较多的时候刚好填充满content容器
        // nextProps.contentHeight  content容器的高度，它会随着窗口的改变计算
        // -100 是Table的表头高度 + 分页高度
        // 最后要把其他元素的高度逐一减去
        let { dispatch, scroll } = this.props,
            tableBodyHeight = nextProps.contentHeight - ReactDOM.findDOMNode(this.refs.fieldset).offsetHeight - 100;
        if( tableBodyHeight > 0 && scroll.y != tableBodyHeight )
            dispatch( changeScroll( { y : tableBodyHeight } ) );

    },
	render(){
        let { dataSource, loading, pagination, bordered, scroll, size } = this.props;
		return <div>
                    <Fieldset ref='fieldset' id='upper-part' title={ '高级搜索' }>
                        <Search/>
                    </Fieldset>
                    <Table ref='table' bordered={ bordered } loading = { loading } scroll={ scroll } size={ size } pagination={ pagination } columns={ columns } dataSource={ dataSource } />
                </div>
	}
}))
