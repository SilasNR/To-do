class UsuarioDTO {
    constructor({ id, username, email, senha, status }, criar = false) {
        this.setId(id);
        this.setUsername(username);
        this.setEmail(email);
        if (criar) {
            this.setSenha(senha);
        } else {
            this.senha = senha;
        }
        this.setStatus(status);
    }

    // Validação do ID
    setId(id) {
        if (!id) throw new Error("ID is required");
        this.id = id;
    }

    // Validação do Username
    setUsername(username) {
        if (!username) throw new Error("username is required");
        this.username = username;
    }

    // Validação do formato de e-mail
    setEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) throw new Error("Invalid email format");
        this.email = email;
    }

    // Validações de senha
    // senha deve ter o tamanho minimo de 8 caracteres
    // senha deve conter uma letra maiuscula 
    // senha deve conter uma letra minuscula 
    // senha deve conter um numero 
    // senha deve conter um caracter especial 
    //
    setSenha(senha) {
        const conterCarEsp = /[!@#$%^&*]/;
        if (senha.length < 8)
            throw new Error("Password must be at least 8 characters long");
        if (!/[A-Z]/.test(senha))
            throw new Error("Password must contain at least one uppercase letter");
        if (!/[a-z]/.test(senha))
            throw new Error("Password must contain at least one lowercase letter");
        if (!/\d/.test(senha))
            throw new Error("Password must contain at least one number");
        if (!conterCarEsp.test(senha))
            throw new Error(
                "Password must contain at least one special character (!@#$%^&*)"
            );
        this.senha = senha;
    }

    // Validação do Status
    setStatus(status) {
        this.status = status;
    }
}

module.exports = UsuarioDTO;
