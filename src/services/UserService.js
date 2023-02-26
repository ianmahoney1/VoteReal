const userData = require('../data/users.json');

const UserService = {
    getUser: function(username, password) {
        for(let user of userData) {
            if (user.username == username && user.password == password) {
                return {
                    name: user.name,
                    username: user.username,
                    council_members: user.council_members,
                    votes: user.votes,
                    uid: user.uid
                }; 
            }
        }
        return null; 
    }
};

export default UserService;