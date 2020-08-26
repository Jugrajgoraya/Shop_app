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
  },
  
  createCart(params){
    return fetch(`${baseUrl}/session`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  updateCart(params){
    return fetch(`${baseUrl}/session`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  allCartItems(){
    return fetch(`${baseUrl}/session`, {
      credentials: "include"
    }).then((res) => res.json());
  }

};
