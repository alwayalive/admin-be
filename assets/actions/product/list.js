export const LOADING_TABLE_PRODUCTION = "LOADING_TABLE_PRODUCTION";
export const DATA_SOURCE_TABLE_PRODUCTION = "DATA_SOURCE_TABLE_PRODUCTION";
export const PAGINATION_TABLE_PRODUCTION = "PAGINATION_TABLE_PRODUCTION";
export const BORDERED_TABLE_PRODUCTION = "BORDERED_TABLE_PRODUCTION";
export const SCROLL_TABLE_PRODUCTION = "SCROLL_TABLE_PRODUCTION";
export const SIZE_TABLE_PRODUCTION = "SIZE_TABLE_PRODUCTION";


export const initialState = {
    loading: true,
    dataSource: [],
    pagination: {
        size: "default",
        showSizeChanger: true,
        total: 0,
    },
    bordered: true,
    scroll: {},
    size: 'middle'
};
export function loadingState(loading = false) {
    return {
        type: LOADING_TABLE_PRODUCTION,
        loading,
    }
}

export function initDataSource(dataSource = []) {
    return {
        type: DATA_SOURCE_TABLE_PRODUCTION,
        dataSource,
    }
}

export function initPagination(pagination = {}) {
    return {
        type: PAGINATION_TABLE_PRODUCTION,
        pagination,
    }
}

export function bordered(bordered = true) {
    return {
        type: BORDERED_TABLE_PRODUCTION,
        bordered,
    }
}

export function changeScroll(scroll = {}) {
    return {
        type: SCROLL_TABLE_PRODUCTION,
        scroll,
    }
}

export function size(size = 'default') {
    return {
        type: SIZE_TABLE_PRODUCTION,
        size,
    }
}
