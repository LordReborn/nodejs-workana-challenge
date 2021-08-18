module.exports = function stepService(store) {
  const service = {};

  service.get = (username) => {
    if (store.hasOwnProperty(username)) {
      return store[username];
    } else {
      return undefined;
    }
  };

  service.add = (username, ts, newSteps) => {
    if (store.hasOwnProperty(username)) {
      store = {
        ...store,
        [username]: {
          ts,
          cumulativeSteps: store[username].cumulativeSteps + newSteps,
        },
      };
    } else {
      store = {
        ...store,
        [username]: {
          ts,
          cumulativeSteps: newSteps,
        },
      };
    }
  };

  return service;
};
