import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Hanan',
        email: 'hanan@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Mehraj',
        email: 'mehraj@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users