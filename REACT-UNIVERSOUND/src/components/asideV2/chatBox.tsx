/*import { useState } from 'react';

// Composant pour ajouter des amis
const AddFriend = ({ onAdd }) => {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(userId);
    setUserId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userId} onChange={e => setUserId(e.target.value)} placeholder="Entrez l'ID de l'utilisateur" />
      <button type="submit">Ajouter un ami</button>
    </form>
  );
};

// Composant pour afficher la liste des amis
const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => <li key={friend}>{friend}</li>)}
  </ul>
);

// Composant principal
const ChatApp = () => {
  const [friends, setFriends] = useState([]);

  const handleAddFriend = (userId) => {
    setFriends(prevFriends => [...prevFriends, userId]);
  };

  return (
    <div>
      <h1>Chat App</h1>
      <AddFriend onAdd={handleAddFriend} />
      <FriendList friends={friends} />
      {/* Ici, vous pouvez ajouter d'autres composants, comme un composant pour afficher les messages du chat */
    /*</div>
  );
};

export default ChatApp;

import React from 'react';

const Message = ({ message, author }) => (
  <div className={`message ${author === 'moi' ? 'message-moi' : 'message-autre'}`}>
    <div className="message-auteur">{author}</div>
    <div className="message-contenu">{message}</div>
  </div>
);

const ChatBox = ({ messages }) => (
  <div className="chat-box">
    {messages.map((msg, index) => <Message key={index} {...msg} />)}
  </div>
);

export default ChatBox;*/
