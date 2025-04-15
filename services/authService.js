import { account } from "./appwrite";
import { ID } from "react-native-appwrite";

const authService = {
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || "Register fail",
      };
    }
  },
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      return {
        error: error.message || "Login fail",
      };
    }
  },

  async getUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },

  async logOut() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return {
        error: error.message || "Logout failed",
      };
    }
  },
};

export default authService;