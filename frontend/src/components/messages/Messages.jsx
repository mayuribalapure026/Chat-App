import React, { useEffect, useRef } from 'react'
import MessageSkeleton from '../../Skeletons/messageSkeleton';
import useGetMessage from '../../hooks/useGetMessage'
import Message from "../messages/Message"
import useListenMessage from '../../hooks/useListenMessage';

const Messages = () => {
  const {messages,loading}=useGetMessage();
  useListenMessage()
  const lastmessageRef=useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastmessageRef.current?.scrollIntoView({behaviour:"smooth"});
    },100)
  },[messages])

  return (
    <div className="px-4 overflow-auto flex-1">
      {!loading && messages.length > 0 && messages.map((message)=>(
        <div key={message._id} ref={lastmessageRef}>
          <Message message={message}/>
        </div>
      ))}
        {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}
        {!loading && messages.length===0 && (
          <p className="text-center text-white">Send a message to start conversation</p>
        )}
    </div>
  )
}

export default Messages
