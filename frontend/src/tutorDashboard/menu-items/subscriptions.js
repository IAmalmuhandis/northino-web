// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const subscriptions = {
    id: 'PaymentsAndSubscriptions',
    title: 'Payments And Subscriptions',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Recieved Payments',
            type: 'item',
            url: '/recievedPayments',
            icon: icons.FontSizeOutlined
        }
    ]
};

export default subscriptions;
