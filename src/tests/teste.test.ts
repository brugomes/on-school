import { app } from "@/app";
import supertest from "supertest";

jest.mock('@/http/middlewares/jwt-validate');
jest.mock('@/repositories/typeorm/user.repository');
jest.mock('@/repositories/typeorm/post.respository');

describe('Create teste', ()=>{
    test('should teste', async ()=>{
        await app.ready();
        
        //createUser
        const createUserData = {
            "name": "professor",
            "email": "professor@teste.com",
            "password": "123456",
            "isadmin": true
        }
        const responseCreateUser = await supertest(app.server).post('/user').send(createUserData)
        expect(responseCreateUser.statusCode).toBe(201)


        //SignIn
        const signInDataWrongEmail = {
            email:"teste@teste.com",
            password:"123"
        }
        const signInDataWrongPassword = {
            email:"teste@email.com",
            password:"567"
        }
        const signInDataCorrect = {
            email:"teste@email.com",
            password:"123"
        }
        const responseSignInWrongEmail = await supertest(app.server).post('/user/signin').send(signInDataWrongEmail)
        const responseSignInWrongPassword = await supertest(app.server).post('/user/signin').send(signInDataWrongPassword)
        const responseSignInWrongCorrect = await supertest(app.server).post('/user/signin').send(signInDataCorrect)
        expect(responseSignInWrongEmail.statusCode).toBe(404)
        expect(responseSignInWrongPassword.statusCode).toBe(404)
        expect(responseSignInWrongCorrect.statusCode).toBe(200)


        //createPost
        const createAndEditData = {
            title: "titulo",
            content: "conteudo",
            author: "1"
        }
        const responseCreatePost = await supertest(app.server).post('/post').send(createAndEditData)
        expect(responseCreatePost.statusCode).toBe(403)


        //editPost
        const responseEditPost = await supertest(app.server).put('/post/1').send(createAndEditData)
        expect(responseEditPost.statusCode).toBe(403)


        //FindPost
        const responseFindPost = await supertest(app.server).get('/post/1').send()
        const responseFindPostWrongId = await supertest(app.server).get('/post/2').send()
        expect(responseFindPost.statusCode).toBe(200)
        expect(responseFindPostWrongId.statusCode).toBe(404)


        //FindAllPost
        const responseFindAllPost = await supertest(app.server).get('/post').send()
        expect(responseFindAllPost.statusCode).toBe(200)


        //FindAllAdminPost
        const responseFindAllAdminPost = await supertest(app.server).get('/post/admin').send()
        expect(responseFindAllAdminPost.statusCode).toBe(403)


        //SearchPost
        const responseSearchPost = await supertest(app.server).get('/post/search').send()
        expect(responseSearchPost.statusCode).toBe(200)


        //DeletePost
        const responseDeletePost = await supertest(app.server).delete('/post/1').send()
        expect(responseDeletePost.statusCode).toBe(403)
    })
})