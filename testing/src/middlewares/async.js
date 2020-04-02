// // Aqui só tem um return return porque o criador dos bagulho dos middleware no redux escolheu fazer assim. Arbitrariamente.
// export default function({dispatch}){
//   // Referencia ao próximo middleware que está na pilha
//   return function(next){
//     // A action aqui é a action que tá vindo
//     return function(action){

//     }
//   }
// }


// TEMPLATE PARA CRIAR UMA MIDDLEWARE FUNCTION
// Isso aqui é a mesma coisa do bagulho ali em cima. Só tá em ES6.
export default ({ dispatch }) => next => (action) => {
  // Check to see if the action has a promise on its 'payload' property
  // If it does, then wait for it to resolve
  // If it doesn't, then send the action on the next middleware

  if(!action.payload || !action.payload.then){
    // Checking if it has a payload or if it has a payload.then. If it finds the .then it assumes that is a promisse.
    return next(action)
    // Sending the action to the next middleware
  }

  //We want to wait fot the promise to resolve (get its data!) and then create a new action with that data and dispatch it.

  action.payload.then(function(responseFromApi){
    const newAction = {...action, payload: responseFromApi}
    dispatch(newAction)
  })
}

