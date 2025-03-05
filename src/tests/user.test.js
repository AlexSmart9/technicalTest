const app = require('../app');
const request = require('supertest');

const BASE_URL = '/api/v1/users';

const user = {
    firstName: 'Indira',
    lastName: 'Pagannoto',
    email: 'indira123@gmail.com',
    password: '12345',
    frontBaseUrl: 'https://127.0.0.1:5373'
};

let token;
let userId;

// Post test
test("POST -> 'BASE_URL', should return status code 201 and res.body.email === user.email", async () => {
    const res = await request(app)
        .post(BASE_URL)
        .send(user);
    
    userId = res.body.id;

    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    expect(res.body.id).toBe(userId);
});

// Login test
test("POST -> 'BASE_URL/login', should return status code 200, res.body.user and res.body.token has to be defined", async () => {
    const res = await request(app)
        .post(`${BASE_URL}/login`)
        .send({
            email: "indira123@gmail.com",
            password: "12345"
        });

    token = res.body.token;

    expect(res.body.token).toBeDefined();
    expect(res.body.user).toBeDefined();
});

// GetAll test
test("GET 'BASE_URL', should return status code 200, and res.body has to be defined", async () => {
    const res = await request(app)
        .get(BASE_URL)
        .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeDefined();
});

// GetOne test
test("GET -> 'BASE_URL/id', should return status code 200 and res.body has to be defined", async () => {
    const res = await request(app)
        .get(`${BASE_URL}/${userId}`)
        .set('Authorization', `Bearer ${token}`);
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeDefined();
});

// Update test
test("PUT -> 'BASE_URL/:id', should return status code 203 and res.body.firstName === Charlie", async () => {
    const res = await request(app)
        .put(`${BASE_URL}/${userId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ firstName: "Charlie" });

    expect(res.statusCode).toBe(203);
    expect(res.body).toBeDefined();
    expect(res.body.firstName).toBe("Charlie");
});

// Delete test
test("DELETE -> 'BASE_URL/id', should return status code 204", async () => {
    const res = await request(app)
        .delete(`${BASE_URL}/${userId}`)
        .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(204);
});