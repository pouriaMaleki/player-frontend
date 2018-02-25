import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export default function (fn, params = {}) {
  return new Promise(resolve => {
    socket.emit('request', { fn, params }, response => {
      resolve(response);
    });
  });
}
