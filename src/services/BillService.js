const billData = require('../data/bills.json');

const BillService = {
    getBills: function(value) {
        let results = [];
        for (let bill of billData) {
            let votes = [];
            for (let vote of bill.votes) {
                votes.push({
                    council_member: vote.name, 
                    vote: vote.vote
                })
            }
            results.push({
                name: bill.name,
                summary: bill.summary, 
                link: bill.link,
                votes: votes,
                decision: bill.decision,
                keywords: bill.keywords
            })
        }
        return results; 
    },

    getStats: function(user) {
        let results = [];
        for (let bill of billData) {
            for (let vote of user.votes) {
                if (vote.name == bill.name) {
                    let council_votes = []; 
                    for (let cvote of bill.votes) {
                        council_votes.push({
                            council_member: cvote.name,
                            vote: cvote.vote
                        }); 
                    }
                    results.push({
                        name: bill.name,
                        user_vote: vote.vote,
                        council_votes: council_votes
                    });
                }
            }
        }
        return results; 
    }
};

export default BillService;