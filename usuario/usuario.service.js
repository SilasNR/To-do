const { v4: uuidv4 } = require("uuid");
const User = require("./usuario.entity.js");
const UserDTO = require("./usuario.dto.js");
const { GenericException } = require("../generic-exception.js");

const users = [
  {
    id: uuidv4(),
    username: "João",
    email: "joao@gmail.com",
    password: "P@ssW0rd",
    isActive: true,
    secretQuestion: "banana"
  },
  {
    id: uuidv4(),
    username: "Maria",
    email: "maria@ulife.com",
    password: "P@ssW0rd",
    isActive: true,
    secretQuestion: "Orange"
  },
];

class UserService {
  findAll() {
    return users.map((user) => new UserDTO(user));
  }

  findOne(id) {
    return users.find((user) => user.id === id);
  }

  findByEmail(email) {
    return users.find(user => user.email === email);
  }
  
  create(UserDTO) {
    users.push(UserDTO);
    return UserDTO;
  }

  update(UserDTO) {
    const userIndex = users.findIndex((user) => user.id === UserDTO.id);
    if (userIndex === -1) return null;
    const updatedUser = UserDTO;
    users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return false;
    users.splice(userIndex, 1);
    return true;
  }
}

module.exports = UserService;
