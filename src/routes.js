import React from 'react';

const Toaster = React.lazy(() =>
  import('./views/notifications/toaster/Toaster')
);
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() =>
  import('./views/base/breadcrumbs/Breadcrumbs')
);
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() =>
  import('./views/base/jumbotrons/Jumbotrons')
);
const ListGroups = React.lazy(() =>
  import('./views/base/list-groups/ListGroups')
);
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() =>
  import('./views/base/paginations/Pagnations')
);
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() =>
  import('./views/base/progress-bar/ProgressBar')
);
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() =>
  import('./views/buttons/brand-buttons/BrandButtons')
);
const ButtonDropdowns = React.lazy(() =>
  import('./views/buttons/button-dropdowns/ButtonDropdowns')
);
const ButtonGroups = React.lazy(() =>
  import('./views/buttons/button-groups/ButtonGroups')
);
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() =>
  import('./views/icons/coreui-icons/CoreUIIcons')
);
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() =>
  import('./views/theme/typography/Typography')
);
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

// Edited
const Rooms = React.lazy(() => import('./views/datatable/rooms/index'));
const Room = React.lazy(() => import('./views/datatable/rooms/Room'));

const Customers = React.lazy(() => import('./views/datatable/customers'));
const Customer = React.lazy(() => import('./views/datatable/customers/Customer'));

const Purchases = React.lazy(() => import('./views/datatable/purchases'));
const Purchase = React.lazy(() => import('./views/datatable/purchases/Purchase'));

const Hosts = React.lazy(() => import('./views/datatable/hosts'));
const Host = React.lazy(() => import('./views/datatable/hosts/Host'));

const createRoom = React.lazy(() => import('./views/method/createRoom/index'));

// Edited
const routes = [
  { path: '/', exact: true, name: 'Trang chủ' },
  { path: '/dashboard', name: 'Bảng điều khiển', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  // Edited
  { path: '/datatable/rooms', name: 'Phòng', exact: true, component: Rooms },
  {
    path: '/datatable/rooms/:id',
    exact: true,
    name: 'Chi tiết phòng',
    component: Room,
  },
  { path: '/datatable/purchases', exact: true, name: 'Đơn thuê nơi ở', component: Purchases },
  {
    path: '/datatable/purchases/:id',
    exact: true,
    name: 'Chi tiết đơn thuê nhà',
    component: Purchase,
  },
  { path: '/datatable/customers', exact: true, name: 'Khách hàng', component: Customers },
  {
    path: '/datatable/customers/:id',
    exact: true,
    name: 'Chi tiết khách hàng',
    component: Customer,
  },
  { path: '/datatable/hosts', exact: true, name: 'Chủ nhà', component: Hosts },
  {
    path: '/datatable/hosts/:id',
    exact: true,
    name: 'Chi tiết chủ nhà',
    component: Host,
  },
  // Edited

  // method
  {
    path: '/method/createRoom',
    exact: true,
    name: 'Tạo nơi ở mới',
    component: createRoom,
  },

  //method
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  {
    path: '/buttons/button-dropdowns',
    name: 'Dropdowns',
    component: ButtonDropdowns,
  },
  {
    path: '/buttons/button-groups',
    name: 'Button Groups',
    component: ButtonGroups,
  },
  {
    path: '/buttons/brand-buttons',
    name: 'Brand Buttons',
    component: BrandButtons,
  },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Alerts,
    exact: true,
  },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  // Edited

  // Edited
];

export default routes;
