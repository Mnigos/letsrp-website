export const validationLength = (
  keys,
  expectedLength,
  message,
  messagesArray
) => {
  keys.forEach((key, i) => {
    if (key) {
      if (key.length < expectedLength[i]) messagesArray.push(message[i]);
    } else messagesArray.push(message[i]);
  });
};

export const validationRegexp = (
  keys,
  expectedRegexp,
  message,
  messagesArray
) => {
  keys.forEach((key, i) => {
    if (key) {
      if (!expectedRegexp[i].test(key)) messagesArray.push(message[i]);
    } else {
      messagesArray.push(message[i]);
    }
  });
};
