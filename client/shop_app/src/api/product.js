import { baseUrl } from "./config";

export const Product = {
  all() {
    return fetch(`${baseUrl}/products`, {
      credentials: "include",
    }).then((res) => res.json());
  },

  one(id) {
    return fetch(`${baseUrl}/products/${id}`, {
      credentials: "include",
    }).then((res) => res.json());
  },

  create(params) {
    return fetch(`${baseUrl}/products`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  update(id, params) {
    return fetch(`${baseUrl}/products/${id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  destroy(id) {
    return fetch(`${baseUrl}/products/${id}`, {
      credentials: "include",
      method: "DELETE",
    }).then((res) => res.json());
  },
};