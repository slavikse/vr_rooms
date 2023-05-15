import { defineStore } from "pinia";

export const useClientsStore = defineStore("clients", {
  state: () => ({
    lobby: {}, // { [roomId]: { clientsCount } }
    clients: {}, // { [clientId]: [ position, rotation ] }
  }),

  actions: {
    updateLobby(lobby) {
      this.lobby = lobby;
    },

    updateClients(clients) {
      Object.entries(clients).forEach(([clientId, clientState]) => {
        if (!this.clients[clientId]) {
          this.clients[clientId] = {};
        }

        Object.assign(this.clients[clientId], clientState);
      });
    },

    deleteClient(clientId) {
      delete this.clients[clientId];
    },
  },
});
