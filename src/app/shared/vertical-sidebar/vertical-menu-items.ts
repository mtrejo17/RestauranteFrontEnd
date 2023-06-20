import { RouteInfo } from './vertical-sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    label: '',
    labelClass: '',
    submenu: []
  },
  {
    path: '/starter',
    title: 'Starter Page',
    icon: 'Home',
    class: '',
    extralink: false,
    label: '',
    labelClass: '',
    submenu: []
  },
  {
    path: '',
    title: 'Sistema',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    label: '',
    labelClass: '',
    submenu: []
  },
  {
    path: '',
    title: 'Configuracion',
    icon: 'fas fa-cog',
    class: 'has-arrow',
    extralink: false,
    label: '',
    labelClass: '',
    submenu: [
      {
        path: '/project/usuarios',
        title: 'Usuarios',
        icon: 'fas fa-users',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
    }
    ]
  },
  {
    path: '',
    title: 'UI Components',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    label: '',
    labelClass: '',
    submenu: []
  },
  {
    path: '',
    title: 'Component',
    icon: 'Cpu',
    class: 'has-arrow',
    extralink: false,
    label: '',
    labelClass: '',
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/alert',
        title: 'Alert',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/carousel',
        title: 'Carousel',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/dropdown',
        title: 'Dropdown',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/modal',
        title: 'Modal',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/pagination',
        title: 'Pagination',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/poptool',
        title: 'Popover & Tooltip',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/progressbar',
        title: 'Progressbar',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/rating',
        title: 'Ratings',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/tabs',
        title: 'Tabs',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/timepicker',
        title: 'Timepicker',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/buttons',
        title: 'Button',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/card',
        title: 'Card',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      },
      {
        path: '/component/notifier',
        title: 'Notifier',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      }
    ]
  }
];
