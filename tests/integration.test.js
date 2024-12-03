#!/usr/bin/env node

const { spawn } = require('child_process');
const fetch = require('node-fetch');

const serverStart = () => new Promise((resolve, _reject) => {
  const server = spawn('node', ['../server.js'],
    {
      env: Object.assign({}, process.env, { PORT: 0 }),
      cwd: __dirname
    });
  server.stdout.once('data', async (data) => {
    const message = data.toString().trim();
    const url = /Server running at (.+)$/.exec(message)[1];
    resolve({ server, url });
  });
});

test('GET /recipes/42', async () => {
  const { server, url } = await serverStart();
  const result = await fetch(`${url}/recipes/42`);
  const body = await result.json();
  expect(body.id).toBe(42);
  server.kill();
});

test('GET /', async () => {
  const { server, url } = await serverStart();
  const result = await fetch(`${url}/`);
  const body = await result.text();
  expect(body).toBe('Hello from Distributed Node.js!');
  server.kill();
});
