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
        let results = {};
        results["history"] = []
        let match = {}; 
        for (let member of user.council_members) {
            match[member] = {
                agree: 0,
                total: 0
            }; 
        }
        for (let bill of billData) {
            for (let vote of user.votes) {
                if (vote.name == bill.name) {
                    let council_votes = []; 
                    for (let council_vote of bill.votes) {
                        council_votes.push({
                            council_member: council_vote.name,
                            vote: council_vote.vote
                        }); 
                        if (match[council_vote.name] != null) {
                            if (council_vote.vote == vote.vote) {
                                match[council_vote.name].agree++;
                            } 
                            match[council_vote.name].total++;   
                        }
                    }
                    results["history"].push({
                        name: bill.name,
                        user_vote: vote.vote,
                        council_votes: council_votes,
                        outcome: bill.decision
                    });
                }
            }
        }
        summary = []
        for (let cm of Object.keys(match)) {
            match_percent = (match[cm].agree / match[cm].total); 
            summary.push({
                agree: match[cm].agree,
                disagree: match[cm].total - match[cm].agree,
                council_member: cm,
                match_percent: match_percent
            })
        }
        results["summary"] = summary; 
        return results; 
    }
};

export default BillService;