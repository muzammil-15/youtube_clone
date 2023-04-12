import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoVideoUrl, demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: {id:{videoId}, snippet}}) => {

  return (
    <Card sx={{width: {md: '350px', xs: '100%'}, boxShadow:'none', borderRadius:0}}>
      <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{width:'350px', height: '180px'}}
        />
      </Link>
      <CardContent sx={{background: '#1e1e1e', height: '100px'}}>
        <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                {snippet?.title.slice(0, 30) || demoVideoTitle.slice(0,30)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId? `/channel/${snippet.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}} />
            </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
