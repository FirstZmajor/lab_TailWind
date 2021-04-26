import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import Routes from './routes'
// style
import './styles/output.css'

const App: React.FC<any> = () => (
  <>
    <Routes />
  </>
)

export default hot(App)
