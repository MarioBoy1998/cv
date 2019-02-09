const initialState = 'https://photogora.ru/img/product/big/3488/1473674174238123488.jpg';

export default function background(state = initialState, action) {
  if(action.type === 'BACKGROUND_CHANGE') {
    state = '';
    return[...state,
      action.payload
  ];
}
  return state;
}
