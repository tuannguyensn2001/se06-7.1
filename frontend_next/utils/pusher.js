import Pusher from 'pusher-js';

const pusher = new Pusher('5cce0bc7b9c1661994d3', {
  cluster: 'ap1',
});

// Object.freeze(pusher);

export default pusher;
