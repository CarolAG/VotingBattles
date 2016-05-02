import Server from 'socket.io'

export default function startServer(store) {
  const io = new Server().attach(8090)
// ^Socket.io server as a well as HTTP server boud to port 8090
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store))
    // actions are just JS
    // if I design an authentication mechanism later it should be inserted here
    // to verify who's submitting an action obj
  });
}
