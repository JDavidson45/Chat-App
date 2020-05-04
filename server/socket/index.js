module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    //   socket.on('messageMount', (id) => {
    //     socket.emit('getMessages', id)
    //  })
    socket.on('message-sent', (message, id, room) => {
      socket.join(room)
      console.log('hit message sent socket')
      socket.broadcast.emit('message-broadcast', message, id)
    })
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
