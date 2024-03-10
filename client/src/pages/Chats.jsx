import { useState, useEffect } from 'react';


//top lvl component gets groups
//pass id as prop
//useEffect to get all messages from group on load -> load into state
//open socket connection
//socket emit event to join room
//socket emit.to(room) on server


export default function Chats(){
  return (
      <>
      <h1>Chats</h1>
      {/* map over messages */}
      </>
  )
};