import supertest from 'supertest';
import { app } from 'src/app';

const request = supertest.agent(app.listen());

describe('Admin', () => {
  describe('POST /admin/login', () => {
    it('should result in API name response', () => {
      return request.post('/rest/v1/en/admin/login')
        .send({username: 'tony', password: 'pwd123'})
        .expect(200, 'API Koa Starter from Rangle.io');
    });
  });
});
