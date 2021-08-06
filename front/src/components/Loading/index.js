import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

const Loading = () => {
  const { loading } = useSelector(store => store.loading)

  return (
    <>
    { loading &&
    <div className="preloader">
        <div className="preloader-inner">
            <div className="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default Loading
