import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
  {
    id: 'adwords-accounts',
    title: 'Tài Khoản',
    type: 'group',
    children: [
      {
        id: 'leads',
        title: 'Leads',
        type: 'collapsable',
        icon: 'face',
        children: [
          {
            id: 'add-accounts',
            title: 'Thêm tài khoản mới',
            translate: 'NAV.SAMPLE.TITLE',
            type: 'item',
            icon: 'email',
            url: '/them-tai-khoan-moi'
          }
        ]
      },
      {
        id: 'account-list',
        title: 'Tài khoản Adwords',
        type: 'item',
        icon: 'email',
        url: '/account-list'
      }
    ]
  }
];
