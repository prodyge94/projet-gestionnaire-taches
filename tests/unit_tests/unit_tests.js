const request = require('supertest');
const { expect } = require('chai');
const app = require('../../backend/server');

// Unit tests for backend

describe('Backend API Tests', () => {
  it('should return 200 for GET /tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should return 201 for POST /tasks', async () => {
    const newTask = { title: 'Test Task', description: 'Test Description' };
    const res = await request(app).post('/tasks').send(newTask);
    expect(res.status).to.equal(201);
    expect(res.body).to.include(newTask);
  });

  it('should return 404 for GET /nonexistent', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.status).to.equal(404);
  });
});

// Unit tests for frontend components
const { render, screen } = require('@testing-library/react');
const Dashboard = require('../../frontend/src/components/Dashboard');
const Login = require('../../frontend/src/components/Login');
const Register = require('../../frontend/src/components/Register');
const TaskCard = require('../../frontend/src/components/TaskCard');
const TaskForm = require('../../frontend/src/components/TaskForm');
const TaskList = require('../../frontend/src/components/TaskList');

describe('Frontend Component Tests', () => {
  it('should render Dashboard component', () => {
    render(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('should render Login component', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('should render Register component', () => {
    render(<Register />);
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('should render TaskCard component', () => {
    render(<TaskCard title="Test Task" description="Test Description" />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should render TaskForm component', () => {
    render(<TaskForm />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should render TaskList component', () => {
    render(<TaskList tasks={[]} />);
    expect(screen.getByText('No tasks available')).toBeInTheDocument();
  });
});
