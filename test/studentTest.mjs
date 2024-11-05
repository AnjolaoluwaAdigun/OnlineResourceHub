import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'; // Ensure app.js is correctly exported

chai.use(chaiHttp);
const { expect } = chai; // Destructure expect from chai

describe('Student API', () => {
  describe('POST /api/students/register', () => {
    it('should register a new student', (done) => {
      chai.request(app)
        .post('/api/students/register')
        .send({
          email: 'test@example.com',
          password: 'securepassword',
          firstName: 'John',
          lastName: 'Doe',
          studyProgram: 'Software Engineering'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message').eql('Student registered successfully');
          done();
        });
    });
  });
});