// Dichiarazione dell'istanza Vue senza specificare "el"
const app = new Vue({
  data: {
    selectedChat: null,
    contacts: [
      {
        name: 'Michele',
        avatar: '/img/avatar_1.jpg',
        lastMessage: 'Ultimo messaggio inviato',
        timestamp: '12:00',
        lastSeen: 'Ultimo accesso oggi alle 12:00',
        messages: [
          { text: 'Hai portato a spasso il cane?', type: 'sent', timestamp: '12:15' },
          { text: 'Ricordati di stendere i panni', type: 'sent', timestamp: '12:18' },
          { text: 'Tutto fatto!', type: 'received', timestamp: '12:23' }
        ]
      },
      {
        name: 'Fabio',
        avatar: '/img/avatar_2.jpg',
        lastMessage: 'Ultimo messaggio inviato',
        timestamp: '12:00',
        lastSeen: 'Ultimo accesso oggi alle 12:00',
        messages: [
          { text: 'Hai portato a spasso il cane?', type: 'sent', timestamp: '12:15' },
          { text: 'Ricordati di stendere i panni', type: 'sent', timestamp: '12:18' },
          { text: 'Tutto fatto!', type: 'received', timestamp: '12:23' }
        ]
      },
      {
        name: 'Samuele',
        avatar: '/img/avatar_3.jpg',
        lastMessage: 'Ultimo messaggio inviato',
        timestamp: '12:00',
        lastSeen: 'Ultimo accesso oggi alle 12:00',
        messages: [
          { text: 'Hai portato a spasso il cane?', type: 'sent', timestamp: '12:15' },
          { text: 'Ricordati di stendere i panni', type: 'sent', timestamp: '12:18' },
          { text: 'Tutto fatto!', type: 'received', timestamp: '12:23' }
        ]
      },
      {
        name: 'AlessandroB.',
        avatar: '/img/avatar_4.jpg',
        lastMessage: 'Ultimo messaggio inviato',
        timestamp: '12:00',
        lastSeen: 'Ultimo accesso oggi alle 12:00',
        messages: [
          { text: 'Hai portato a spasso il cane?', type: 'sent', timestamp: '12:15' },
          { text: 'Ricordati di stendere i panni', type: 'sent', timestamp: '12:18' },
          { text: 'Tutto fatto!', type: 'received', timestamp: '12:23' }
        ]
      },
      {
        name: 'AlessandroL.',
        avatar: '/img/avatar_5.jpg',
        lastMessage: 'Ultimo messaggio inviato',
        timestamp: '12:00',
        lastSeen: 'Ultimo accesso oggi alle 12:00',
        messages: [
          { text: 'Hai portato a spasso il cane?', type: 'sent', timestamp: '12:15' },
          { text: 'Ricordati di stendere i panni', type: 'sent', timestamp: '12:18' },
          { text: 'Tutto fatto!', type: 'received', timestamp: '12:23' }
        ]
      },
      {
        name: 'Claudia',
        avatar: '/img/avatar_6.jpg',
        lastMessage: 'Ultimo messaggio inviato',
        timestamp: '12:00',
        lastSeen: 'Ultimo accesso oggi alle 12:00',
        messages: [
          { text: 'Hai portato a spasso il cane?', type: 'sent', timestamp: '12:15' },
          { text: 'Ricordati di stendere i panni', type: 'sent', timestamp: '12:18' },
          { text: 'Tutto fatto!', type: 'received', timestamp: '12:23' }
        ]
      },
      {
        name: 'Federico',
        avatar: '/img/avatar_7.jpg',
        lastMessage: 'Ultimo messaggio inviato',
        timestamp: '12:00',
        lastSeen: 'Ultimo accesso oggi alle 12:00',
        messages: [
          { text: 'Hai portato a spasso il cane?', type: 'sent', timestamp: '12:15' },
          { text: 'Ricordati di stendere i panni', type: 'sent', timestamp: '12:18' },
          { text: 'Tutto fatto!', type: 'received', timestamp: '12:23' }
        ]
      },
      {
        name: 'Davide',
        avatar: '/img/avatar_8.jpg',
        lastMessage: 'Ultimo messaggio inviato',
        timestamp: '12:00',
        lastSeen: 'Ultimo accesso oggi alle 12:00',
        messages: [
          { text: 'Hai portato a spasso il cane?', type: 'sent', timestamp: '12:15' },
          { text: 'Ricordati di stendere i panni', type: 'sent', timestamp: '12:18' },
          { text: 'Tutto fatto!', type: 'received', timestamp: '12:23' }
        ]
      }
    ],
    searchQuery: '' // Proprietà per memorizzare la query di ricerca
  },

  methods: {
    openChat(index) {
      this.selectedChat = index;
    },
    sentMessage() {
      // Verifica se abbiamo una chat
      if (this.selectedChat !== null) {
        const message = this.$refs.inputMsj.value.trim();

        // Verifica se il messaggio è vuoto
        if (message !== '') {
          // Crea un nuovo oggetto messaggio
          const newMessage = {
            text: message,
            type: 'sent',
            timestamp: this.obtainHour()
          };

          // Aggiunge il messaggio all'array
          this.contacts[this.selectedChat].messages.push(newMessage);

          // Pulisce l'input
          this.$refs.inputMsj.value = '';

          // Risponde il messaggio con un 'Ok :)' dopo 1 secondo
          setTimeout(() => {
            const okMessage = {
              text: 'Ok :)',
              type: 'received',
              timestamp: this.obtainHour()
            };
            this.contacts[this.selectedChat].messages.push(okMessage);
          }, 1000);
        }
      }
    },

    obtainHour() {
      const data = new Date();
      const hour = data.getHours().toString().padStart(2, '0');
      const minutes = data.getMinutes().toString().padStart(2, '0');
      return `${hour}:${minutes}`;
    },

    filterContacts() {
      //Filtrare i contatti
      const query = this.searchQuery.toLowerCase();
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(query)
      );
    }
  }
});

app.$mount('.container');