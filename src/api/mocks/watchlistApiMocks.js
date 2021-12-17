import config from '@/config'
const watchlistApiMocks = [
    {
        method: 'POST',
        url: config.api.athens.filerWatchlist,
        response: {
            data: [
                {
                    'id': '89051d7a-2322-4d91-a475-6ff5a936d618',
                    'lastModifiedBy': 'test',
                    'lastModifiedDate': 1536734279776,
                    'createdBy': 'test',
                    'createdDate': 1534929731261,
                    'name': 'shivam test 1',
                    'source': 'UI',
                    'startDate': 1534870800000,
                    'endDate': 1534957200000,
                    'comment': 'kj',
                    'itemCount': 2,
                    'permissions': ['READ', 'EDIT', 'DELETE']
                }],
            paging: {
                'page': 2,
                'total_page': 3,
                'item_per_page': 10,
                'total_item': 27
            },
            errors: null
        }
    },
    {
        method: 'GET',
        url: config.api.athens.getCategory,
        response: {
            'data': [
                {
                    'categoryCode': 'AL-1000041',
                    'categoryName': 'Alat Musik'
                }],
            'paging': null,
            'errors': null
        }
    },
    {
        method: 'POST',
        url: config.api.athens.getCategory,
        response: {
            'data': [
                {
                    categoryCode: 'AK-1000147',
                    categoryName: 'Aksesoris Alat Musik',
                    parentCategory: 'AL-1000041'
                }],
            'paging': null,
            'errors': null
        }
    },
    {
        method: 'POST',
        url: config.api.athens.getBrands,
        response: {
            data: ['Bellroy', 'SONY']
        }
    },
    {
        method: 'POST',
        url: config.api.athens.searchPO,
        response: {
            data: [{
                'activityId': 'string',
                'activityName': 'string',
                'createdBy': 'string',
                'createdDate': 0,
                'dateOfDelivery': '2018-12-03T16:29:20.211Z',
                'id': 'string',
                'lastModifiedBy': 'string',
                'lastModifiedDate': 0,
                'openBravoDocumentNumber': 'string',
                'vendorCode': 'string',
                'vendorName': 'string',
                'warehouseCode': 'string',
                'warehouseName': 'string'
            }]
        }
    },
    {
        method: 'POST',
        url: config.api.athens.createWatchlist + '/0900293',
        response: {
            code: 0,
            'data': {
                'comment': 'string',
                'createdBy': 'string',
                'createdDate': 0,
                'endDate': '2018-10-10T05:04:11.982Z',
                'id': 'string',
                'itemCount': 0,
                'items': [
                    {
                        'brand': 'string',
                        'createdBy': 'string',
                        'createdDate': 0,
                        'id': 'string',
                        'itemCode': 'string',
                        'itemName': 'string',
                        'lastModifiedBy': 'string',
                        'lastModifiedDate': 0,
                        'productCode': 'string',
                        'productName': 'string',
                        'salesQuantity': 0,
                        'stockAndSaleSummary': {
                            'pendingPurchaseOrders': [
                                {
                                    'pendingQuantity': 0,
                                    'poDate': '2018-10-10T05:04:11.982Z',
                                    'poNumber': 'string',
                                    'price': 0,
                                    'quantity': 0,
                                    'warehouseName': 'string'
                                }
                            ],
                            'sales': {},
                            'warehouses': [
                                {
                                    'code': 'string',
                                    'name': 'string',
                                    'openPurchaseOrders': 0,
                                    'quantity': 0,
                                    'quantityOnHand': 0
                                }
                            ]
                        },
                        'totalStock': 0,
                        'vendor': 'string',
                        'watchlistItemKpis': [
                            {
                                'alert': true,
                                'comment': 'string',
                                'condition': 'Greater than or equal to',
                                'createdBy': 'string',
                                'createdDate': 0,
                                'endDate': '2018-10-10T05:04:11.982Z',
                                'field': 'Sales Quantity',
                                'id': 'string',
                                'key': 'string',
                                'lastModifiedBy': 'string',
                                'lastModifiedDate': 0,
                                'name': 'string',
                                'startDate': '2018-10-10T05:04:11.982Z',
                                'value': 0,
                                'valueType': 'ABSOLUTE'
                            }
                        ]
                    }
                ],
                'lastModifiedBy': 'string',
                'lastModifiedDate': 0,
                'name': 'string',
                'source': 'PO',
                'startDate': '2018-10-10T05:04:11.982Z'
            },
            'errors': {},
            'paging': {
                'item_per_page': 0,
                'page': 0,
                'total_item': 0,
                'total_page': 0
            },
            'status': 'string'
        }
    },
    {
        method: 'DELETE',
        url: config.api.athens.createWatchlist + '/0900293',
        response: {
            code: 0,
            'data': {
                'comment': 'string',
                'createdBy': 'string',
                'createdDate': 0,
                'endDate': '2018-10-10T05:04:11.982Z',
                'id': 'string',
                'itemCount': 0,
                'items': [
                    {
                        'brand': 'string',
                        'createdBy': 'string',
                        'createdDate': 0,
                        'id': 'string',
                        'itemCode': 'string',
                        'itemName': 'string',
                        'lastModifiedBy': 'string',
                        'lastModifiedDate': 0,
                        'productCode': 'string',
                        'productName': 'string',
                        'salesQuantity': 0,
                        'stockAndSaleSummary': {
                            'pendingPurchaseOrders': [
                                {
                                    'pendingQuantity': 0,
                                    'poDate': '2018-10-10T05:04:11.982Z',
                                    'poNumber': 'string',
                                    'price': 0,
                                    'quantity': 0,
                                    'warehouseName': 'string'
                                }
                            ],
                            'sales': {},
                            'warehouses': [
                                {
                                    'code': 'string',
                                    'name': 'string',
                                    'openPurchaseOrders': 0,
                                    'quantity': 0,
                                    'quantityOnHand': 0
                                }
                            ]
                        },
                        'totalStock': 0,
                        'vendor': 'string',
                        'watchlistItemKpis': [
                            {
                                'alert': true,
                                'comment': 'string',
                                'condition': 'Greater than or equal to',
                                'createdBy': 'string',
                                'createdDate': 0,
                                'endDate': '2018-10-10T05:04:11.982Z',
                                'field': 'Sales Quantity',
                                'id': 'string',
                                'key': 'string',
                                'lastModifiedBy': 'string',
                                'lastModifiedDate': 0,
                                'name': 'string',
                                'startDate': '2018-10-10T05:04:11.982Z',
                                'value': 0,
                                'valueType': 'ABSOLUTE'
                            }
                        ]
                    }
                ],
                'lastModifiedBy': 'string',
                'lastModifiedDate': 0,
                'name': 'string',
                'source': 'PO',
                'startDate': '2018-10-10T05:04:11.982Z'
            },
            'errors': {},
            'paging': {
                'item_per_page': 0,
                'page': 0,
                'total_item': 0,
                'total_page': 0
            },
            'status': 'string'
        }
    }
]
export default watchlistApiMocks
