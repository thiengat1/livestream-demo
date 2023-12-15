import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function RoomPage() {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appId = 1168590357;
    const serverSecret = '3c73b1f3833caa8181c8fcd7807675f2';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      'lewis'
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div className='room-page'>
      <div ref={myMeeting}></div>
    </div>
  );
}

export default RoomPage;
