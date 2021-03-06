class Party {
    constructor(partyId, partyType) {
        this.party_id = partyId;
        this.party_members = [];
        this.party_type = partyType || "Default";
    }

    GetLeader() {
        return this.party_members[0];
    }

    AddMember(member) {
        this.party_members.push(member);
    }

    RemoveMember(member) {
        let i = this.party_members.indexOf(member);
        this.party_members.splice(i, 1);

        if(i != -1)
            return true;

        return false;
    }

    HasMember(session_id) {
        let m  = this.GetMember(session_id);
        return (m) ? true : false;
    }

    GetMember(session_id) {
        return this.party_members.find(m => m.id == session_id);
    }
}

module.exports = Party;