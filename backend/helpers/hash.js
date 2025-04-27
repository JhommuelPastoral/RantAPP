import bcrypt from 'bcrypt';

export const hashPassword = async(password)=>{

  try {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.log(error.message);
  }
}

export const checkPassword = (password)=>{
  const issue = [];
  if(password.length <8) issue.push('At least 8 characters');
  if(!/[a-z]/.test(password)) issue.push('Need a lowercase letter');
  if(!/[A-Z]/.test(password)) issue.push('Need a uppercase letter');
  if(!/[0-9]/.test(password)) issue.push('Need a Number');
  if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)) issue.push('Need a symbol');

  return issue;

}

export const isPasswordMatch = async(password, userPassword)=>{

  const match = await bcrypt.compare(password, userPassword);
  if(match) return true;
  return false;


}