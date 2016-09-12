'use strict';
let express = require('express'),
	router = express.Router();
let menuList = [
    {
        title : "基础管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : [
            {
                title:"基础信息",
                icon : "Sicon13.png",
                hicon : "HSicon13.png",
                children : [
                    {
                        title : "组织机构",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : "/product"
                    },
                    {
                        title : "知识库",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : "/"
                    },
                ]
            },
            {
                title:"物业信息",
                icon : "Sicon13.png",
                hicon : "HSicon13.png",
                children : [
                    {
                        title : "小区信息",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "楼栋信息",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "楼座信息",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "房间信息",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "商铺信息",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "车位信息",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    }
                ]
            },{
                title:"相关方信息",
                icon : "Sicon13.png",
                hicon : "HSicon13.png",
                children : [
                    {
                        title : "开发商",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "工程机构",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "政务机构",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "供应机构",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "维保机构",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "相关方合同",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    }
                ]
            },
            {
                title:"业委会信息",
                icon : "Sicon13.png",
                hicon : "HSicon13.png",
                children : [
                    {
                        title : "业委会信息",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                    {
                        title : "业委会成员信息",
                        icon : "Ticon_42.png",
                        hicon : "HTicon_42.png",
                        href : ""
                    },
                ]
            }
        ]
    },
    {
        title : "业主（客户）管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : [{
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            title:"业主管理"
        },{
            title:"客户管理",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
        }]
    },
    {
        title : "工程管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : [{
            title:"仪表设备",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
        },{
            title:"抄表",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
        },{
            title:"抄表流水",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
        }]
    },
    {
        title : "收费管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : [{
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            title:"收费设备管理"
        },{
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            title:"前台收银"
        },{
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            title:"账单流水"
        }]
    },
    {
        title : "移动端管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : []
    },
    {
        title : "系统维护",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : []
    }
];

router.get("/getMenusList",( req, res) =>{
	res.send(menuList)
});

module.exports = router;