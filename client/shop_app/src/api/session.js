import { baseUrl } from "./config";

export const Session = {
  create(params) {
    // params: { email: 'email@domain.ext', password: 'strong password' }
    return fetch(`${baseUrl}/session`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  }
  
};
