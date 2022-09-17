// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
        {
            id: 'supportTeam',
            title: 'Contact Support Team',
            type: 'item',
            url: '/supportTeam',
            icon: icons.ChromeOutlined
        },
        {
            id: 'FAQS',
            title: 'FAQS',
            type: 'item',
            icon: icons.QuestionOutlined,
            external: true,
            target: true
        }
    ]
};

export default support;
