import { app } from "@/app";
import supertest from "supertest";

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
        console.log("responseCreateUser>>>>>>>",responseCreateUser.statusCode)


        //SignIn
        const signInData = {
            email:"teste@teste.com",
            password:"123"
        }
        const responseSignIn = await supertest(app.server).post('/user/signin').send(signInData)
        console.log("responseSignIn>>>>>>>",responseSignIn.statusCode)


        //createPost
        const createAndEditData = {
            title: "titulo",
            content: "conteudo",
            author: "1"
        }
        const responseCreatePost = await supertest(app.server).post('/post').send(createAndEditData)
        console.log("responseCreatePost>>>>>>>",responseCreatePost.statusCode)


        //editPost
        const responseEditPost = await supertest(app.server).put('/post/1').send(createAndEditData)
        console.log("responseEditPost>>>>>>>",responseEditPost.statusCode)


        //FindPost
        const responseFindPost = await supertest(app.server).get('/post/1').send()
        console.log("responseFindPost>>>>>>>",responseFindPost.statusCode)


        //FindAllPost
        const responseFindAllPost = await supertest(app.server).get('/post').send()
        console.log("responseFindAllPost>>>>>>>",responseFindAllPost.statusCode)


        //FindAllAdminPost
        const responseFindAllAdminPost = await supertest(app.server).get('/post/admin').send()
        console.log("responseFindAllAdminPost>>>>>>>",responseFindAllAdminPost.statusCode)


        //SearchPost
        const responseSearchPost = await supertest(app.server).get('/post/search').send()
        console.log("responseSearchPost>>>>>>>",responseSearchPost.statusCode)


        //DeletePost
        const responseDeletePost = await supertest(app.server).delete('/post/1').send()
        console.log("responseDeletePost>>>>>>>",responseDeletePost.statusCode)
    })
})