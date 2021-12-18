import React, { useState, useEffect} from 'react';
import db from './fireBase';
import { collection, getDocs } from "firebase/firestore";
import { doc, onSnapshot, query } from "firebase/firestore"; 
import './App.css';
import Video from './components/Video/Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    const q = query(collection(db, "videos"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      setVideos(querySnapshot.docs.map(doc => doc.data()));
    });

    // db.collection('videos').get().then(snapshot => 
    //   setVideos(vidoesnapshot.docs.map(doc => doc.data())))
  }, [videos]);


  return (
    <div className="app">
      <div className='app__videos'>
        {videos.map(
          ({url, channel, description, song, likes, comments, shares}) =>
          (
            <Video 
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
              /> 
          )
        )}
      
      </div>

    </div>
  );
}

export default App;
