const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
    it ('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato",
            whatsapp: "5877777007",
            city: "Rio do Sul",
            uf:"CE"
        });
    });
});