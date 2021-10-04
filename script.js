// Set up initial state and reducer --------------------------------------------
const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
}

const wagonStateReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather':
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1
      }
    case 'travel':
      if (state.supplies < 20 * action.payload) return state;
      return {
        ...state,
        supplies: state.supplies - (20 * action.payload),
        distance: state.distance + (10 * action.payload),
        days: state.days + action.payload
      }
    case 'tippedWagon':
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      }
    default:
      return state;
  }
}



// Play ------------------------------------------------------------------------
let wagon = wagonStateReducer(undefined, {});
console.log(wagon)
wagon = wagonStateReducer(wagon, {type: 'travel', payload: 1})
console.log(wagon)
wagon = wagonStateReducer(wagon, {type: 'gather'})
console.log(wagon)
wagon = wagonStateReducer(wagon, {type: 'tippedWagon'})
console.log(wagon)
wagon = wagonStateReducer(wagon, {type: 'travel', payload: 3})
console.log(wagon)
wagon = wagonStateReducer(wagon, {type: 'travel', payload: 3})
console.log(wagon)