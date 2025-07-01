// tests/unit.test.js

const request = require('supertest');
const app = require('../server');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_for_dev';

// Mock data
const mockUser = {
    id: '1',
    email: 'admin@test.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'Admin User'
}

const newMockUser = {
  id: '2',
  email: 'newuser@test.com',
  password: 'newpassword123',
  name: 'New User'
};

const mockTask = {
    id: '1',
    title: 'Tâche exemple',
    description: 'Description de la tâche exemple',
    status: 'todo',
    priority: 'medium',
    assignedTo: '1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

// Tests

describe('Authentication Middleware', () => {
  it('should return 401 if no token is provided', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(401);
    expect(res.body.error).toBe("Token d'accès requis");
  });

  it('should return 403 if token is invalid', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', 'Bearer invalid_token');
    expect(res.status).toBe(403);
    expect(res.body.error).toBe('Token invalide');
  });
});

describe('User Management', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: newMockUser.email, password: newMockUser.password, name: newMockUser.name });
    expect(res.status).toBe(201);
    expect(res.body.user.email).toBe(newMockUser.email);
  });

  it('should login an existing user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: mockUser.email, password: 'password' });
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});

describe('Task Management', () => {
  it('should create a new task', async () => {
    const token = jwt.sign({ id: mockUser.id }, JWT_SECRET);
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send(mockTask);
    expect(res.status).toBe(201);
    expect(res.body.title).toBe(mockTask.title);
  });

  it('should fetch all tasks', async () => {
    const token = jwt.sign({ id: mockUser.id }, JWT_SECRET);
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

