import {List} from 'immutable'

export function setEntries (state, entries) {
  console.log('using .set', state.set('entries', entries))
  return state.set('entries', List(entries))
}
