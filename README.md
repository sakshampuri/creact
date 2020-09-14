### React App bootstrapped with [CRA](https://github.com/facebook/create-react-app)
---

**Use yarn start to start locally in development mode**

- Extensive react app with multiple components
- State Management with redux
  - react-redux and configured store with thunk and logger middleware
- All other dependencies can be found in the repo
- This app uses json-server library to mimick a backend rest API
  - To do this, install [json-server](https://www.npmjs.com/package/json-server) globally
  - take the resources and put it into db.json
  - start the json server with ```json-server --watch db.json -d <delay in ms> -p <port_number>} --host <optional ip address>``` inside the json-server folder
  - put all the images in public folder
