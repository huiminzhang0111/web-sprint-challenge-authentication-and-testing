// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

const server = require('./server')
const request = require('supertest')
const db = require('../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.migrate.latest()
})

afterAll(async () => {
  await db.destroy()
})

describe('[POST] /register', () => {
  let res
  beforeEach(async ()=>{
    res = await (await request(server).post('/register')).send({ username: "mary" })
  })
  it('responds with 201 CREATED', async () => {
    expect(res.status).toBe(201)
  })
})