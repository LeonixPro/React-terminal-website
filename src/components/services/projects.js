export const showProjects = async () => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/projects`);
    const response = await request;
    const res = await response.json();
    return res;
  } catch (error) {
    console.log("There was an error!");
  }
};

export const openProject = async (id) => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/project/${id}`);
    const response = await request;
    const res = await response.json();
    return res;
  } catch (error) {
    console.log("There was an error!");
  }
};
