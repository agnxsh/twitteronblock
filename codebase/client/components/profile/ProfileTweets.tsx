import React from 'react'
import Post from '../Post'
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
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

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets.map((tweet, index) => (
        <Post
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          text={tweet.text}
          avatar={tweet.avatar}
          timestamp={tweet.timestamp}
          isProfileImageNft={tweet.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
