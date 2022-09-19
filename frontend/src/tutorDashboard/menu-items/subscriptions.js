// assets
import { DollarCircleOutlined } from "@ant-design/icons";

// icons
const icons = {
  DollarCircleOutlined,
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
            icon: icons.DollarCircleOutlined
        }
    ]
};

export default subscriptions;
