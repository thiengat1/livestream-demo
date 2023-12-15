import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/room/${roomId}`);
  };

  return (
    <div className='home-page'>
      <form className='form'>
        <div>
          <label>Enter Room Id</label>
          <input
            value={roomId}
            type='text'
            required
            placeholder='Enter Room Id'
            onChange={(e) => setRoomId(e.target.value)}
          ></input>
        </div>
        <button onClick={handleFormSubmit}>Enter Room</button>
      </form>
    </div>
  );
}

export default HomePage;
