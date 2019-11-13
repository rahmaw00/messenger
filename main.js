class User {
  constructor(name, inbox) {
    this.name = name
    this.inbox = []
  }

  sendMessage(receiver, content) {
    let msg = new Message(receiver, content)
    receiver.inbox.push(msg)
    return `Your message to ${receiver.name} has been sent!`
  }

  readMessage(i) {
    return this.inbox[i].content
  }
}

// user.sendMessage('RWB', 'Hello')

class Message {
  constructor(receiver, message) {
    this.receiver = receiver
    this.message = message
  }
}

let user1 = new User('Ramata')
let user2 = new User('RWB')
