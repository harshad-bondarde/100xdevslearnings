import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { notifications, totalNotificationsSelector } from "./atom"
import { useEffect } from "react"
import  axios  from "axios"
function App() {

  return (
    <div>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </div>
  )
}
function MainApp(){
  const [networkCount,setNetworkCount]=useRecoilState(notifications)
  const totalNotificationCount=useRecoilValue(totalNotificationsSelector)

  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/notifications") //when reloaded for a sec 0 value is there then it gets fetched
  //     .then(res=>{
  //       console.log(res)
  //        setNetworkCount(res.data)
  //     })
  // },[])

  return (
    <>
      <button>Home</button>
      <button>My Network {networkCount.network>=100?"99+":networkCount.network}</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging {networkCount.messaging}</button>
      <button>Notifications{networkCount.notifications}</button>
      <button>Me{totalNotificationCount}</button>
    </>
  )
}

export default App
