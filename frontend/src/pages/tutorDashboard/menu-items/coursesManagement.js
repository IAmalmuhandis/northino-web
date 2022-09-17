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

const account = {
    id: 'media',
    title: 'Media Management',
    type: 'group',
    children: [
        {
            id: 'addVideo',
            title: 'Add Video',
            type: 'item',
            url: '/addVideo',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'ManageCourses',
            title: 'Manage Courses',
            type: 'item',
            url: '/manageVideo',
            icon: icons.FontSizeOutlined
        }
    ]
};

export default account;
