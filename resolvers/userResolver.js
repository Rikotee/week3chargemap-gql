import bcryct from 'bcrypt';
import User from '../models/userModel';

export default {
    Query: {
        user: async (parent, args, {user}) => {
        console.log('userResolver', user);
        // find user by id
        },
        login: async (parent, args, {req, res}) => {
        // call passport login (done in class)
    },
},
    Mutation: {
        registerUser: async (parent, args) => {
        try {
            const hash = await bcrypt.hash(args.password, 12);
            const userWithHash = {
            ...args,
            password: hash,
            };
            const newUser = new User(userWithHash);
            const result = await newUser.save();
            return result;
        } catch (err) {
            throw new Error(err);
        }
    },
    }
}