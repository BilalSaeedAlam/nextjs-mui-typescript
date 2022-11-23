export const getSessionData = () => {
  try {
    let stored;
    if (window && window.sessionStorage) {
      const key = "user";
      stored = sessionStorage.getItem(key);
      if (!stored) {
        return;
      }
    }
    return stored;
  } catch (err) {
    console.log(err);
  }
};
