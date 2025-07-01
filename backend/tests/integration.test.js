const request = require('supertest');
const app = require('../server'); // utilise directement votre server.js

describe('Tests d’intégration API /tasks', () => {
  let token = null;

  // Avant tous les tests, on se connecte en tant qu’admin
  beforeAll(async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@test.com', password: 'password' });

    token = res.body.token;
  });

  test('POST /api/tasks crée une tâche', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Tâche test',
        description: 'Description test',
        priority: 'high'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('title', 'Tâche test');
    expect(res.body).toHaveProperty('priority', 'high');
  });

  test('GET /api/tasks retourne les tâches', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
