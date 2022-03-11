import React from 'react'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'
import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
const style = {
  wrapper: 'flex-[2] border-r border-l border-[#38444d]',
  header:
    'sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center',
  headerTitle: 'text-xl font-bold',
}

const tweets = [
  {
    displayName: 'Agnish',
    userName: '0x9D02406491E920ff3E2b49BB4470352a751D755c',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQEob3X1smFxKQ/profile-displayphoto-shrink_200_200/0/1643113692785?e=1651708800&v=beta&t=bbiUdUNEjzkGaW3ek2qmkt0ugNePPVtrJQ3jLnO4ZIs',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-02-14T12:00:00.000Z',
  },
  {
    displayName: 'Agnish',
    userName: '0x9D02406491E920ff3E2b49BB4470352a751D755c',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQEob3X1smFxKQ/profile-displayphoto-shrink_200_200/0/1643113692785?e=1651708800&v=beta&t=bbiUdUNEjzkGaW3ek2qmkt0ugNePPVtrJQ3jLnO4ZIs',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Agnish',
    userName: '0x9D02406491E920ff3E2b49BB4470352a751D755c',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQEob3X1smFxKQ/profile-displayphoto-shrink_200_200/0/1643113692785?e=1651708800&v=beta&t=bbiUdUNEjzkGaW3ek2qmkt0ugNePPVtrJQ3jLnO4ZIs',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Agnish',
    userName: '0x9D02406491E920ff3E2b49BB4470352a751D755c',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C5603AQEob3X1smFxKQ/profile-displayphoto-shrink_200_200/0/1643113692785?e=1651708800&v=beta&t=bbiUdUNEjzkGaW3ek2qmkt0ugNePPVtrJQ3jLnO4ZIs',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
]

const Feed = () => {
  const { tweets } = useContext(TwitterContext)
  return (
    <div className={`${style.wrapper}`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4
                )}...${tweet.author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            4
          )}...${tweet.author.walletAddress.slice(-4)}`}
          avatar={tweet.author.profileImage}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
