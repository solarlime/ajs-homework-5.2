function fetchData(data) {
  const result = data.special.map((item) => {
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
