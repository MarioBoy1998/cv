const initialState = '';

export default function id(state = initialState, action) {
  if(action.type === 'ID_CHANGE') {
    state = '';
    return[...state,
      action.payload
  ];
}
  return state;
}
