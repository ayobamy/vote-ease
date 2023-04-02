const generateVoteId = async () => {
    const randomNumber = Math.random() * 100000000000000000;
    const uniqueId = 'VT' + randomNumber.toString();
    return uniqueId;
}

module.exports = generateVoteId;
