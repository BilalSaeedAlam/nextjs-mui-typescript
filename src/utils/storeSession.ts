export const SessionDataStorage = (key: any, value: any) => {
  if (value) {
    sessionStorage.setItem(key, value);
    console.log("session stored");
  } else {
    console.log("session not set");
  }
};
