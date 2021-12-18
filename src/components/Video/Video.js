import React, {useRef, useState} from 'react'
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSideBar from '../VideoSideBar/VideoSideBar';
import './video.css';

function Video({
    url, channel, description, song, likes, comments, shares
}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPressed = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className='video'>
            <video 
                className='video__player'
                loop
                onClick={onVideoPressed}
                ref={videoRef}
                src={url}
                ></video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSideBar likes={likes} comments={comments} shares={shares} />
        </div>
    )
}

export default Video
