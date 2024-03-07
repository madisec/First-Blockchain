const crypto = require('crypto');

const hashFunc = (input) => {
    return '*' + crypto.createHash('md5').update(input).digest("hex"); + '*';
}

class Block {
    constructor(data, hash, lastHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

class BlockChain {
    constructor() {
        const genesis = new Block('Gen-Data', 'Gen-Hash', 'Gen-LastHash');
        this.chain = [genesis];

    }

    addBlock(data) {
        const lastHash  = this.chain[this.chain.length - 1].hash;
        const hash = hashFunc(data + lastHash);
        const block  = new Block(data, hash, lastHash);
        this.chain.push(block);

    }
}

const fooBlockchain = new BlockChain();
fooBlockchain.addBlock('One');
fooBlockchain.addBlock('Tow');
fooBlockchain.addBlock('three');

console.log(fooBlockchain);

