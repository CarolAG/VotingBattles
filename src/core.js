import {List, Map} from 'immutable'

export function setEntries (state, entries) {
  console.log('using .set', state.set('entries', entries))
  return state.set('entries', List(entries))
}

export function next (state) {
  const entries = state.get('entries')
  console.log('is this the new state, the next?', state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  }))
  return state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  })
}