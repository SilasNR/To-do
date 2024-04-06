
class User {

    constructor(id, username, email, password, secretQuestion, isActive) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.secretQuestion = secretQuestion;
        this.isActive = isActive;
    }
}

module.exports = User;
