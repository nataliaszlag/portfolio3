const imgs = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
    {
        front: 'Created satellite orbit analyzation software for NASA',
        back: 'Dr. Evelyn Boyd Granville',
        flipped: false,
      },
      {
        front: 'Created satellite orbit analyzation software for NASA',
        back: 'Dr. Evelyn Boyd Granville',
        flipped: false,
      },
  ]; 

  new Vue({
    el: '#gallery-app',
    data: {
      cards: imgs,
    },
    methods: {}
  });