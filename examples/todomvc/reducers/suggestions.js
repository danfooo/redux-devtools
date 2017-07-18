const initialState = [
  {
    name: 'Toothbrush',
    id: 'toothbrush',
    tags: ['bathroom'],
  },
  {
    name: 'Toothpaste',
    id: 'toothpaste',
    tags: ['bathroom'],
  },
  {
    name: 'Headphones',
    tags: ['tech'],
  },
  {
    name: 'Phone Charger',
    id: 'phoneCharger',
    tags: ['phone', 'tech'],
  },
  {
    // Maybe the name should actually be a list of names.
    // I can call this "Cellphone" or "Mobile phone" and then that shgould be
    // the suggestion, the item is then still having the right relationships though.
    name: 'Phone',
    id: 'phoneCharger',
    tags: ['tech'],
  },
  {
    name: 'Watch Charger',
    id: 'watchCharger',
    tags: ['tech'],
  },
  {
    name: 'Sunglasses',
    id: 'sunglasses',
    tags: ['weather'],
  },
  {
    name: 'Umbrella',
    id: 'umbrella',
    tags: [],
  },
  {
    name: 'Camera',
    id: 'camera',
    tags: ['tech'],
  },
];

export default function suggestions(state = initialState, action) {
  switch (action.type) {

  default:
    return state;
  }
}
