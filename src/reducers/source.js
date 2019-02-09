const initialState = '';

export default function source(state = initialState, action) {
  if(action.type === 'SOURCE_CHANGE') {
    state = '';
    return[...state,
      action.payload
  ];
}
  return state;
}
