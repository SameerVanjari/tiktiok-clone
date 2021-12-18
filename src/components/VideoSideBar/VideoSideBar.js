import React, { useState } from 'react';
import './videoSideBar.css';
import { Favorite, Message, FavoriteBorder, Share } from '@material-ui/icons';

function VideoSideBar({ likes, comments, shares }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className='video__sidebar'>
            <div className='video__sidebar-button'>
                {liked ? (
                    <Favorite fontSize='large' onClick={e => setLiked(false)} />
                ) : (
                    <FavoriteBorder fontSize='large' onClick={e => setLiked(true)} />
                )}
                <p>{liked? likes + 1  : likes} </p>
            </div>
            <div className='video__sidebar-button'>
                <Message />
                <p>{comments}</p>
            </div>
            <div className='video__sidebar-button'>
                <Share />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar
