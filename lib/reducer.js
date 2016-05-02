'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _core = require('./core');

function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? _core.INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'SET_ENTRIES':
      return (0, _core.setEntries)(state, action.entries);
    case 'NEXT':
      return (0, _core.next)(state);
    case 'VOTE':
      return state.update('vote', function (voteState) {
        return (0, _core.vote)(voteState, action.entry);
      });
  }
  return state;
}

// if reducer doesn't recognize action it just returns state