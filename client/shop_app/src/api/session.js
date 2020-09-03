import { baseUrl } from "./config";

export const Session = {

  create(params) {

    return fetch(`${baseUrl}/session`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  current(){
    return fetch(`${baseUrl}/session/current`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
  },

  destroy(){
    return fetch(`${baseUrl}/session/destroy`, {
      credentials: "include",
      method: "DELETE"
    }).then();
  },

  // session sontrollers for Cart
  
  createCart(params){
    return fetch(`${baseUrl}/session/createCart`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  updateCart(params){
    return fetch(`${baseUrl}/session/updateCart`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  allCartItems(){
    return fetch(`${baseUrl}/session/index`, {
      credentials: "include"
    }).then((res) => res.json());
  }

};
