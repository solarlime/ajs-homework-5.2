function fetchData(data) {
  // eslint-disable-next-line no-unused-vars
  const { special, ...rest } = data;
  const result = special.map((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    return {
      id, name, icon, description,
    };
  });
  return result;
}

export default fetchData;
