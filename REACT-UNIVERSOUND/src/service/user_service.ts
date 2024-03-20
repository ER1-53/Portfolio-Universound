import axios from 'axios';
import SongService from './song_service';

// UserService class
export default class UserService {

  // Method to request a password reset
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

  // Method to change the password
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

  // Method to create a new user
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

  // Method to find all users
  static async findAllUser() {
    const token = await SongService.upTokenByCookie();
    try {
      const res = await axios.get('/api/users', {
      headers: { Authorization: `Bearer ${token}` }
      });
      console.log(`List d\'utilisateur chargé avec succès ${res.data.data}`);
      return res.data.data;
    } catch (error) {
      console.error('les utilisateur n\'ont pas pu etre chargé.'+ error)
    }
  }

  // Method to delete a user
  static async deleteUser(userId: string) {
    const token = await SongService.upTokenByCookie();
    try {
      const res = await axios.delete(`http://localhost:4001/api/users/${userId}`,{
      headers: { Authorization: `Bearer ${token}` }
    });
    } catch (error) {
      console.error(' L\'utilisateur n\'a pas pu etre supprimé.'+ error)
    }
  }

};
