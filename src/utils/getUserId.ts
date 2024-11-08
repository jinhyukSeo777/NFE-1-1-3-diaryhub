const getUserId = () => {
  const token = localStorage.getItem('authToken');
  const userId = token && JSON.parse(atob(token.split('.')[1])).userId;
  return userId;
};

export default getUserId;
