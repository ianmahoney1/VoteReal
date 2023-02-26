const userData = require('../data/users.json');

const UserService = {
    getUser: function(first_name, last_name, password) {
        for(let user of userData) {
            if (user.first_name == first_name && user.last_name == last_name && user.password == password) {
                return {
                    first_name: user.first_name,
                    last_name: user.last_name,
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