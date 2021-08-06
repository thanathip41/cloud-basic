import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoading } from '../../action/loading'
const Index = () => {
  const { user } = useSelector(store => store.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(toggleLoading())
  }, [dispatch])

  return (
        <div className="has-text-centered">
        <section className="section">
          <div className="container text-center">
            <h1 className="title "> About </h1>
            <h3 className="title "> name : {user.name } </h3>
            <h3 className="title "> email : {user.email } </h3>
          </div>
        </section>
      </div>
  )
}

export default Index
