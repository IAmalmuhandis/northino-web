// assets
import { ProfileOutlined, VideoCameraAddOutlined, ProjectOutlined } from '@ant-design/icons';

// icons
const icons = {
    ProfileOutlined,
    VideoCameraAddOutlined,
    ProjectOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const Media = {
    id: 'Media',
    title: 'Media',
    type: 'group',
    children: [
        {
            id: 'AddVideo',
            title: 'Add Video',
            type: 'item',
            url: '/addVideo',
            icon: icons.VideoCameraAddOutlined,
            target: true
        },
        {
            id: 'ManageVideo',
            title: 'Manage Video',
            type: 'item',
            url: '/manageVideo',
            icon: icons.ProjectOutlined,
            target: true
        }
    ]
};

export default Media;
