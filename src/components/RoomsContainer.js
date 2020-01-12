import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import { withRoomConsumer } from '../contex'
import Loading from './Loading'

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomsContainer);

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value;
//                     if (loading) {
//                         return <Loading />
//                     }

//                     return (
//                         <div>
//                             hi from roomscontainer
//                             <RoomFilter rooms={sortedRooms} />
//                             <RoomList rooms={rooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
