//TODO- need to get icons from PM
// import failureTransaction from '@icons/menu/failure-transaction.svg'
// import history from '@icons/menu/history.svg'
// import inboundOrder from '@icons/menu/inbound-order.svg'
// import outboundOrder from '@icons/menu/outbound-order.svg'
// import physicalInventoryDocument from '@icons/menu/physical-inventory-document.svg'
// import purchaseOrder from '@icons/menu/purchase-order.svg'
// import stockAdjustment from '@icons/menu/stock-adjustment.svg'


const MENUS = [ // TODO: get this data from API => TBD
    {
        label: 'Page',
        routeName: 'PageView',
        icon: ''
    },
    {
        label: 'Squad Alert',
        routeName: 'SquadAlert',
        icon: ''
    },
    {
        label: 'Squads Schedule',
        routeName: 'CalendarView',
        icon: ''
    },
    // {
    //     label: 'Outbound',
    //     icon: '',
    //     isOpen: false,
    //     subMenuList: [
    //         {
    //             label: 'Order',
    //             routeName: 'OutboundOrder'
    //         },
    //         {
    //             label: 'Return',
    //             routeName: 'OutboundReturn'
    //         }
    //     ]
    // },
    {
        label: 'My Schedule',
        routeName: 'MySchedule',
        icon: ''
    },
    // {
    //     label: 'Physical inventory',
    //     routeName: 'PhysicalInventoryDocument',
    //     icon: ''
    // },
    // {
    //     label: 'History',
    //     icon: '',
    //     isOpen: false,
    //     subMenuList: [
    //         {
    //             label: 'Inbound',
    //             routeName: 'InboundHistoryEmpty'
    //         },
    //         {
    //             label: 'Stock',
    //             routeName: 'StockHistory'
    //         },
    //         {
    //             label: 'Work Order',
    //             routeName: 'WorkOrderHistory'
    //         }
    //     ]
    // }
]

export {
    MENUS
}
