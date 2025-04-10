import mongoose, { mongo } from 'mongoose'
import { User } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/foptima')
    .then(() => User.deleteMany())
    .then(() => {
        const admin = new User({
            name: 'Admin',
            email: 'admin.foptima@gmail.com',
            username: 'admin',
            password: 'admin!2009'
        })

        const josefer = new User({
            name: 'Jose',
            email: 'jose.fernandez.foptima@gmail.com',
            username: 'josefer',
            password: 'josefer!2009'
        })

        const mariarod = new User({
            name: 'Maria',
            email: 'm.rodriguez.foptima@gmail.com',
            username: 'mariarod',
            password: 'mariarod!2009'
        })

        return Promise.all([
            admin.save(),
            josefer.save(),
            mariarod.save()
        ])
    })
    .then(items => {
        const [admin, josefer, mariarod] = items

        //console.log(admin, josefer, mariarod)

        for(const item of items) {
            console.log(item)
        }
    })
    .then(() => console.log('The End'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())


