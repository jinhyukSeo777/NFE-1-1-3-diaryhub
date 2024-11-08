const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const signupUser = async (
  username: string,
  id: string,
  password: string
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/auth/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, userId: id, password }),
    }
  );
  return response;
};

export const loginUser = async (id: string, password: string) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: id,
      password,
    }),
  });
  return response;
};
