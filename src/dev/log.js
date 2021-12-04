export async function devLog(...args) {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.REACT_APP_ENABLE_LOG
  )
    devLog(...args);
}
