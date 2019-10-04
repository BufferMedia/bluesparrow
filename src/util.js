export default {
  serializeData(obj) {
    return obj.length === 0
      ? ""
      : Object.keys(obj)
          .map(i => {
            return obj[i]["name"];
          })
          .join(", ");
  }
};
