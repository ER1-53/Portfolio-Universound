import axios from 'axios';

export default class UserService {

  static async RequestPasswordReset(mail: string): Promise<string | void> {
    try {
      const res = await axios.post(
        `http://localhost:4001/api/users/reset-password`,
        { mail: mail },
        { headers: { "Content-Type": "application/json" }}
      );

      return res.data.token;
    } catch (error) {
      console.error(error);
    }
  }

  static async ChangePassword(mail: string, password: string): Promise<Boolean> {
    try {
      const userResponse = await axios.get(`http://localhost:4001/api/users/${mail}`);
      const user = userResponse.data.data;
      const token = user.resetPasswordToken
      const res = await axios.put(
        `http://localhost:4001/api/users/reset-password/${token}`,
        { mail, password },
        { headers: { "Content-Type": "application/json" }},
      );

      console.log('Modification du mot de passe ok.')
      window.location.href = '/login';
      return true
    } catch (error) {
      console.error(error);
      return false
    }
  }

  static async createUser(lastname: string, firstname: string, username: string, password: string, mail: string ): Promise<void> {
    try {
      const res = await axios.post('http://localhost:4001/api/users',
      { lastname, firstname, username, mail, password },
      { headers: { "Content-Type": "application/json" }},
      );
      console.log('created user')
    } catch (error) {
      console.error(error);
    }
  }
};
