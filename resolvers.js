import {quotes,users} from "./fakeDb.js"
import {randomBytes} from "crypto"
 const resolvers = {
    Query:{
        users:()=> users,
        user:(parent,args)=>users.find(usr=>usr.id ==args.id),
        quotes:()=>quotes,
        iquote:(parent,{by})=>quotes.filter(qute=>qute.by ==by),
        },
    User:{
     quotes:(user)=>quotes.filter((qut)=>qut.by===user.id)
    },
    Mutation:{
        createUserDummy:(_,{userNew})=>{
          const id = randomBytes(5).toString('hex')
          users.push({
            id,
            ...userNew
          })
          return users.find((user)=>user.id==id)
        }
        

    }
 }
 export default resolvers