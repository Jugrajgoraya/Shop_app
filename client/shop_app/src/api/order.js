import { baseUrl } from "./config";

export const Order = {
    all() {
        return fetch(`${baseUrl}/orders`, {
          credentials: "include"
        }).then((res) => res.json());
      },
    
    one(id) {
      return fetch(`${baseUrl}/orders/${id}`, {
        credentials: "include"
      }).then((res) => res.json());
    },

    create(params) {
      return fetch(`${baseUrl}/orders`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }).then((res) => res.json());
    }
}