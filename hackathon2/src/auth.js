
export const login = (username, password) => {
  if (username === 'admin' && password === 'abcd') {
    localStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
};

export const isAdmin = () => localStorage.getItem('isAdmin') === 'true';

export const logout = () => localStorage.removeItem('isAdmin');
