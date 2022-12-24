import React from "react";
import Profile from "./Profile/Profile.jsx"
import user from "./Profile/user.json"
import Statistics from "./Statistics/Statistics.jsx";
import data from "./Statistics/data.json"



export const App = () => (
    <>
    <Profile
    name = {user.name}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    </>
)

export default App;



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
