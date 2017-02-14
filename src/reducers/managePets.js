export let state;


export function managePets(state={pets: []}, action){
  switch(action.type){
    case "ADD_PET":
      return Object.assign({}, state, {
        pets: [...state.pets, action.payload]
      });
    case "REMOVE_PET":
      var pets = [...state.pets];
      for (var i = 0; i < pets.length; i++) {
        if (pets[i].id === action.payload) {
          pets.splice(i, 1);
          break;
        }
      }
      return Object.assign({}, state, {
        pets: pets
      })
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render()
}

export function render(){
  let pets = state.pets.map((pet, i) => {
    return `<li>${pet.name}</li>`
  })
  let container = document.getElementById('container');
  container.innerHtml = `<ul>${pets}</ul>`
}
