import React from 'react';
import './videoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({ channel, description, song }) {
    return (
        <div className='video__footer'>
            <div className='video__footer-text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className='video__footer-ticker'>
                    <MusicNoteIcon className='video__footer-ticker-icon' />
                    <Ticker mode='smooth'>
                        {({index}) => (
                            <>
                            <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>

            <img className='video__footer-record' src='https://static.thenounproject.com/png/934821-200.png' alt='record' />                 
        </div>
    )
}

export default VideoFooter
