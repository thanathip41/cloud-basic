import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleLoading } from '../../action/loading'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(toggleLoading())
  }, [dispatch])

  return (
      <div className="has-text-centered">
      <section className="section">
        <div className="container">
          <h1 className="title"> index </h1>
        </div>
      </section>
    </div>
  )
}

export default Index
