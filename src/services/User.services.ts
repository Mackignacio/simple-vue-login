export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserData extends UserLoginData {
  name: string;
}

const users: UserData[] = [
  {
    email: "test@test.com",
    password: "test",
    name: "test",
  },
  {
    email: "other@test.com",
    password: "other",
    name: "other",
  },
];
const userLogin = ({ email, password }: UserLoginData) => {
  for (const user of users) {
    if (user.email === email && user.password === password) {
      return user;
    }
  }
};

export { userLogin };
