const db = require('../config');

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.voteId = voteId;
  }

  // Save the user document to Firestore
  save() {
    const usersRef = db.collection('users');
    return usersRef.add({
      name: this.name,
      email: this.email,
      password: this.password,
      // voteId: this.voteId
    });
  }

  // Get a user document by ID from Firestore
  static getById(id) {
    const userRef = db.collection('users').doc(id);
    return userRef.get().then((doc) => {
      if (doc.exists) {
        return new User(doc.data().name, doc.data().email, doc.data().password);
      } else {
        throw new Error('User not found');
      }
    });
  }
}

module.exports = User;
