import React from 'react'
import { useState } from 'react'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'
const ProfileImageMinter = () => {
  const [status, setStatus] = useState('initial')
  //in our modal children we'll have our initial, loading, finished and default state
  const modalChildren = () => {
    // switch () {
    //   case 'initial':
    //     break
    //   default:
    //     break
    // }
  }
  return <div>ProfileImageMinter</div>
}

export default ProfileImageMinter
