import {createStore} from 'redux'
import reducer from './reducer'

export defaul function makeStore(){
  rerturn createStore(reducer)
}
