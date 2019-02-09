const initialState = '';

export default function user(state = initialState, action) {
  if(action.type === 'USER_NAME') {
    state = '';
    return[...state,
      action.payload
  ];
}
  return state;
}
