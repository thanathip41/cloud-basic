import { Provider } from 'react-redux'
import { store } from './redux/store'
import Router from './routes'
import AutoLogin from './components/Login/autoLogin'
import Loading from './components/Loading'

const App = () => (
  <Provider store={store}>
      <Router />
      <AutoLogin/>
      <Loading/>
  </Provider>
)

export default App
