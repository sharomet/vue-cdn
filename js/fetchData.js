const fetchData = async url => {
  try {
    const res = await fetch(`${URL_API}/${url}`);
    const users = await res.json();
    return users;
  } catch (error) {
    console.log("FetchUsers:", error);
  }
}