interface NavObject{
    id: Number,
    name: String,
    link: String
}

const navItems: Array<NavObject> = [
    {
        id: 0,
        name: 'Home',
        link: '#home',
    },
    {
        id: 1,
        name: 'Welcome',
        link: '#welcome',
    },
    {
        id: 0,
        name: 'Events',
        link: '#events',
    },
    {
        id: 0,
        name: 'Members',
        link: '#members',
    },
    {
        id: 0,
        name: 'Crypto',
        link: '#crypto',
    },
    {
        id: 0,
        name: 'Status',
        link: '#status',
    },
]

export default navItems
