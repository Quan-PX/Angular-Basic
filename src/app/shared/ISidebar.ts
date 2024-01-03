import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: 'Giới thiệu',
    url: '/',
    icon: 'icon-info',
  },
  {
    name: 'Người dùng',
    url: '/user',
  },
  {
    name: 'Danh mục sản phẩm',
    url: '/category',
  },
  //   {
  //     name: 'Quản lý hình dạng sản phẩm',
  //     url: '/shapes',
  //     icon: 'fa fa-object-ungroup',
  //     authorities: [Role.ADMIN, Role.SELLER],
  //     children: [
  //       {
  //         name: 'Danh sách hình dạng',
  //         url: '/shapes/list',
  //         authorities: [Role.ADMIN, Role.SELLER],
  //         icon: 'icon-list',
  //       },
  //       {
  //         name: 'Thêm mới hình dạng',
  //         url: '/shapes/new',
  //         authorities: [Role.ADMIN],
  //         icon: 'icon-note',
  //       },
  //     ],
  //   },
];
