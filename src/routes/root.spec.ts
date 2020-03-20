import supertest from 'supertest';
import { app } from 'src/app';

const request = supertest.agent(app.listen());

describe('Root', () => {
  describe('GET /ping', () => {
    it('should result in API name response', () => {
      return request.get('/').expect(200, 'pong');
    });
  });
});
