import Server from 'socket.io'

export default function startServer() {
  const io = new Server().attach(8090)
}
// ^Socket.io server as a well as HTTP server boud to port 8090
