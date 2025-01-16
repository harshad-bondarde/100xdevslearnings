import {atom,selector} from "recoil"
import axios from "axios"
export const notifications=atom({
    key:"networkAtom",
    //default can be assynchronous function
    default:selector({
        key:"networlAtomSelector",
        get: async ()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications");
            
            return res.data
        }
    })
})
// export const notifications=atom({
//     key:"networkAtom",
//     default:{
//         network:0,
//         jobs:0,
//         notifications:0,
//         messaging:0
//     }
// })

export const totalNotificationsSelector=selector({
    key:"totalNotificationSelector",
    get: ({get})=>{
        const allnotifications=get(notifications);
        return allnotifications.network+allnotifications.jobs+allnotifications.notifications+allnotifications.messaging
    }
})