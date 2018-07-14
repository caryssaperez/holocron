const VALID_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails:any) => {
  const invalidEmails = emails
    .split(',')
    .map((email:string) => email.trim())
    .filter((email:string) => VALID_EMAIL_REGEX.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
