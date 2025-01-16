// import { useState } from 'react'
// import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
// import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'


// function App() {
  
//   return <div>
//     <RecoilRoot>
//       <MainApp/>
//     </RecoilRoot>
//   </div>
// }

// function MainApp(){
  //   const NetworkNotificationCount=useRecoilValue(networkAtom)
//   const jobsCount=useRecoilValue(jobsAtom)
//   const notificationsCount=useRecoilValue(notificationsAtom)
//   const messagingCount=useRecoilValue(messagingAtom)

//   //lets make onclick on ME update messegingcount by 1
//   // if we declare state variable here then whole app will get rerender

//   return (
  //     <div>
  //       <button>Home</button>
  
  //       <button>My network {NetworkNotificationCount>=100?"99+":NetworkNotificationCount}</button>
  //       <button>Jobs {jobsCount}</button>
  //       <button>Messaging {messagingCount}</button>
  //       <button >Notifications {notificationsCount}</button>
  
  //       <Buttonupdater/>
  //     </div>
  //   )
  // }
  // function Buttonupdater(){
    //   const setMessagingCount=useSetRecoilState(messagingAtom)
    //   return <button onClick={()=>{
      //     setMessagingCount(c=>c+1);
      //   }}>Me</button>
      // }
      // export default App
      
      //----------------------------------------------------------------------------------------------------------------
      
      // import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
      // import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'
      
      // function App() {
        
      //   return <div>
      //     <RecoilRoot>
      //       <MainApp/>
      //     </RecoilRoot>
      //   </div>
      // }
      
      // function MainApp(){
        //   const NetworkNotificationCount=useRecoilValue(networkAtom)
        //   const jobsCount=useRecoilValue(jobsAtom)
        //   const notificationsCount=useRecoilValue(notificationsAtom)
        //   const messagingCount=useRecoilValue(messagingAtom)
        
        //   const totalNotificationsCount=useRecoilValue(totalNotificationSelector)
        //   //we want to show total notification on Me 
        
        //   //we could just create a variable and add all the values in it
        //   //whole app will be rerendered didnt used usememo
        //   return (
          //     <div>
          //       <button>Home</button>
          
          //       <button>My network {NetworkNotificationCount>=100?"99+":NetworkNotificationCount}</button>
          //       <button>Jobs {jobsCount}</button>
          //       <button>Messaging {messagingCount}</button>
          //       <button >Notifications {notificationsCount}</button>
          //       <button>Me {totalNotificationsCount}</button>
          //     </div>
          //   )
          // }
          
          // export default App
          
          
       