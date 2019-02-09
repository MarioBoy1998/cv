const initialState = '';

export default function year(state = initialState, action) {
  if(action.type === 'YEAR_CHANGE') {
    state = '';
    return[...state,
      action.payload
  ];
}
  return state;
}
