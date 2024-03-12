import { useState, useEffect } from 'react';
import { useSubscription, useMutation } from '@apollo/client';
import { GET_MESSAGES } from '../utils/mutations';

// const userGroup

export default function Chats(){
  return (
      <>
      <h1>Chats</h1>
      <div className='chat'>
      {/* {Messages} */}
      </div>
      <label for='chat-message'>Message:</label>
      <input type='text' name='chat-message'></input>
      <input type='submit'></input>
      </>
  )
};