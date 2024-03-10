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
      <div>

      </div>
      <label for='chat-message'>Message:</label>
      <input type='text' name='chat-message'></input>
      <input type='submit'></input>
      </>
  )
};