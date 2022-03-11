import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { client } from '../lib/client'
export const TwitterContext = createContext()
export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccount, setCurrentAccount] = useState('')

  const [tweets, setTweets] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const router = useRouter()
  useEffect(() => {
    checkIfWalletIsConnected()
  })

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        //connected
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      console.error('error')
      setAppStatus('error')
    }
  }

  const createUserAccount = async (userWalletAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const userDoc = {
        _type: 'users',
        _id: userWalletAddress,
        name: 'Unnamed',
        isProfileImageNft: false,
        profileImage:
          'https://media-exp1.licdn.com/dms/image/C5603AQEob3X1smFxKQ/profile-displayphoto-shrink_200_200/0/1643113692785?e=1651708800&v=beta&t=bbiUdUNEjzkGaW3ek2qmkt0ugNePPVtrJQ3jLnO4ZIs',
        walletAddress: userWalletAddress,
      }
      await client.createIfNotExists(userDoc)
      setAppStatus('connected')
    } catch (error) {
      router.push('/')
      setAppStatus('error')
    }
  }

  const fetchTweets = async () => {
    const query = `
    *[_type == "tweets"]{
      "author": author->{name, walletAddress, profileImage, isProfileImageNft},
      tweet,
      timestamp
    }|order(timestamp desc)
    `

    const sanityResponse = await client.fetch(query)
    setTweets([])

    sanityResponse.forEach(async (items) => {
      const newItem = {
        tweet: items.tweet,
        timestamp: items.timestamp,
        author: {
          name: items.author.name,
          walletAddress: items.author.name,
          isProfileImageNft: items.author.isProfileImageNft,
          profileImage: items.author.profileImage,
        },
      }
    })
    setTweets((prevState) => [...prevState, newItem])
  }
  const getCurrentUserDetails = async (userAccount = currentAccount) => {
    if (appStatus !== 'connected') return

    const query = `
    *[_type == "users" && _id == "${userAccount}"]{
      "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
      name,
      profileImage,
      isProfileImageNft,
      coverImage,
      walletAddress
    }
    `
    const sanityResponse = await client.fetch(query)
    setCurrentUser({
      tweets: sanityResponse[0].tweets,
      name: sanityResponse[0].name,
      profileImage: sanityResponse[0].profileImage,
      isProfileImageNft: sanityResponse[0].isProfileImageNft,
      coverImage: sanityResponse[0].coverImage,
      walletAddress: sanityResponse[0].walletAddress,
    })
  }
  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectWallet,
        fetchTweets,
        tweets,
        currentUser,
      }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
