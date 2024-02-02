import { ROLE } from '../enums/roleEnum';

export interface INewUser {
  userName: string;
  passWord: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUser extends INewUser {
  id: number;
  activated: boolean;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  role: ROLE;
}

export interface ILogin {
  username: string;
  password: string;
  rememberMe: boolean;
}

export const fakeUsers: IUser[] = [
  {
    id: 1,
    userName: 'Quan',
    passWord: '123',
    firstName: 'QUAN',
    lastName: 'Pham',
    email: 'quan@1234',
    activated: true,
    imageUrl: '',
    createdAt: '',
    updatedAt: '',
    role: ROLE.ADMIN,
  },
  {
    id: 2,
    userName: 'QmonsterQ',
    passWord: '1234',
    firstName: 'Xuan',
    lastName: 'Quan',
    email: 'quanpham94@gmail.com',
    activated: true,
    imageUrl: '',
    createdAt: '',
    updatedAt: '',
    role: ROLE.USER,
  },
];

const usersData: any[] = [
  {
    id: 0,
    username: 'John Doe',
    registered: '2022/01/01',
    email: 'Guest.com',
    lastName: 'Macus',
    firstName: 'Pending',
  },
  {
    id: 1,
    username: 'Samppa Nori',
    registered: '2022/01/31',
    email: 'Membe.comr',
    lastName: 'bro',
    firstName: 'Active',
    _props: { color: 'success', align: 'middle' },
  },
  {
    id: 2,
    username: 'Estavan Lykos',
    registered: '2022/02/01',
    email: 'Staff.com',
    lastName: 'Pen',
    firstName: 'Banned',
    _cellProps: { username: { color: 'info', active: true } },
  },
  {
    id: 3,
    username: 'Chetan Mohamed',
    registered: '2022/02/01',
    email: 'Admin.com',
    lastName: 'Tuns',
    firstName: 'Inactive',
  },
  {
    id: 4,
    username: 'Derick Maximinus',
    registered: '2022/03/01',
    email: 'Membe.comr',
    lastName: 'Kai',
    firstName: 'Pending',
    _selected: true,
  },
  {
    id: 5,
    username: 'Friderik Dávid',
    registered: '2022/01/21',
    email: 'Staff.com',
    lastName: 'Ronal',
    firstName: 'Active',
  },
  {
    id: 6,
    username: 'Yiorgos Avraamu',
    registered: '2022/01/07',
    email: 'Membe.comr',
    lastName: 'rasfrod',
    firstName: 'Active',
  },
  {
    id: 7,
    username: 'Avram Tarasios',
    registered: '2022/02/08',
    email: 'Staff.com',
    lastName: 'BBQ',
    firstName: 'Banned',
  },
  {
    id: 8,
    username: 'Quintin Ed',
    registered: '2022/02/01',
    email: 'Admin.com',
    lastName: 'Fresss',
    firstName: 'Inactive',
  },
  {
    id: 9,
    username: 'Enéas Kwadwo',
    registered: '2022/03/01',
    email: 'Membe.comr',
    lastName: 'Macus',
    firstName: 'Pending',
  },
  {
    id: 10,
    username: 'Agapetus Tadeáš',
    registered: '2022/01/21',
    email: 'Staff.com',
    lastName: 'Mes',
    firstName: 'Active',
  },
  {
    id: 11,
    username: 'Carwyn Fachtna',
    registered: '2022/01/01',
    email: 'Membe.comr',
    lastName: 'Neymar',
    firstName: 'Active',
  },
  {
    id: 12,
    username: 'Nehemiah Tatius',
    registered: '2022/02/11',
    email: 'Staff.com',
    lastName: 'Tevez',
    firstName: 'Banned',
  },
  {
    id: 13,
    username: 'Ebbe Gemariah',
    registered: '2022/02/08',
    email: 'Admin.com',
    lastName: 'Pogba',
    firstName: 'Inactive',
  },
  {
    id: 14,
    username: 'Eustorgios Amulius',
    registered: '2022/03/01',
    email: 'Membe.comr',
    lastName: 'Sancho',
    firstName: 'Pending',
  },
  {
    id: 15,
    username: 'Leopold Gáspár',
    registered: '2022/01/21',
    email: 'Staff.com',
    lastName: 'qưer',
    firstName: 'Active',
  },
  {
    id: 16,
    username: 'Pompeius René',
    registered: '2022/01/10',
    email: 'Membe.comr',
    lastName: 'assfw',
    firstName: 'Active',
  },
  {
    id: 17,
    username: 'Paĉjo Jadon',
    registered: '2022/02/01',
    email: 'Staff.com',
    lastName: 'Macucccass',
    firstName: 'Banned',
  },
  {
    id: 18,
    username: 'Micheal Mercurius',
    registered: '2022/02/11',
    email: 'Admin.com',
    lastName: 'a',
    firstName: 'Inactive',
  },
  {
    id: 19,
    username: 'Ganesha Dubhghall',
    registered: '2022/03/01',
    email: 'Membe.comr',
    lastName: 'Macus',
    firstName: 'Pending',
  },
  {
    id: 20,
    username: 'Hiroto Šimun',
    registered: '2022/01/21',
    email: 'Staff.com',
    lastName: 'Macus',
    firstName: 'Active',
  },
  {
    id: 21,
    username: 'Vishnu Serghei',
    registered: '2022/01/01',
    email: 'Membe.comr',
    lastName: 'Macus',
    firstName: 'Active',
  },
  {
    id: 22,
    username: 'Zbyněk Phoibos',
    registered: '2022/02/14',
    email: 'Staff.com',
    lastName: 'Macus',
    firstName: 'Banned',
  },
  {
    id: 23,
    username: 'Aulus Agmundr',
    registered: '2022/01/01',
    email: 'Membe.comr',
    lastName: 'Macus',
    firstName: 'Pending',
  },
  {
    id: 42,
    username: 'Ford Prefect',
    registered: '2001/05/25',
    email: 'Alien.com',
    lastName: 'Macus',
    firstName: "Don't panic!",
    _cellProps: { role: { active: true } },
  },
];
export default usersData;
