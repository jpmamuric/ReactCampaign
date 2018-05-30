export default ({ title, content }) => {
  let errors = {};

  if(!title) {
    errors.title = 'Please enter a title';
  } else if (title.length < 2) {
    errors.title = 'title must be longer than 2 characters';
  } else if (title.length > 25) {
    errors.title = 'title must be less that 50 characters';
  }

  if(!content) {
    errors.content = 'Please enter some content';
  };

  return errors;
}
