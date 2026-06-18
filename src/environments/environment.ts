const apiUrl = 'http://localhost:3002/api/';
const imgPath = `/assets/img/`;

export const environment = {
  production: false,
  defaultLanguage: 'es',
  api: `${apiUrl}`,
  api_security: `${apiUrl}auth/`,
  imgPath: imgPath,
  BUILD_TS: 0,
  FRONT_TOKEN:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvc3RhY29tcGFzc0BzaGlya2Fzb2Z0LmNvbSIsImZ1bGxfbmFtZSI6IkNvc3RhIENvbXBhc3MiLCJjbGllbnQiOiJjb3N0YV9jb21wYXNzIiwic291cmNlIjoid2Vic2l0ZSJ9.mGKLw0TXL7zJMxuERHzaCD2d5RBeCDZxHyOWS5k8b7U',
};
