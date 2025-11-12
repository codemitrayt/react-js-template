const appEnv = {
  NODE_ENV: import.meta.env.VITE_NODE_ENV,

  APP_NAME: import.meta.env.VITE_APP_NAME,
  APP_LOGO: import.meta.env.VITE_APP_LOGO,
  APP_FAVICON_LOGO: import.meta.env.VITE_APP_FAVICON_LOGO,

  BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
  BACKEND_BASE_URL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
}

export default appEnv
