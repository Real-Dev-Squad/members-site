interface NavObject {
  id: Number
  name: String
  link: String
}

const navItems: Array<NavObject> = [
  {
    id: 0,
    name: 'Home',
    link: 'https://realdevsquad.com/',
  },
  {
    id: 1,
    name: 'Welcome',
    link: 'https://welcome.realdevsquad.com/',
  },
  {
    id: 0,
    name: 'Events',
    link: 'https://www.realdevsquad.com/events',
  },
  {
    id: 0,
    name: 'Members',
    link: 'https://members.realdevsquad.com/',
  },
  {
    id: 0,
    name: 'Crypto',
    link: 'https://crypto.realdevsquad.com/',
  },
  {
    id: 0,
    name: 'Status',
    link: 'https://status.realdevsquad.com/',
  },
]

export default navItems
