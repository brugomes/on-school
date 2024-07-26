import { IUser } from '@/entities/models/user.interface'
import { UUID } from 'crypto'
import { hash } from 'bcryptjs'

export class UserRepository {

  constructor() {
  }

  async create(
    name: string,
    email: string,
    password: string,
    isadmin: boolean,
  ): Promise<IUser | undefined> {
    const hashedPassword = await hash("123", 8)
    return {
      name: "Usuario",
      email: "teste@email.com",
      password: hashedPassword,
      isadmin: true,
      posts: [],
      createdAt: new Date()
    }
  }

  async findById(id: UUID): Promise<IUser | null> {
    const hashedPassword = await hash("123", 8)
    return {
      name: "Usuario",
      email: "teste@email.com",
      password: hashedPassword,
      isadmin: true,
      posts: [],
      createdAt: new Date()
    }
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const hashedPassword = await hash("123", 8)
    const users = [
      {
        name: "Usuario",
        email: "teste@email.com",
        password: hashedPassword,
        isadmin: false,
        posts: [],
        createdAt: new Date()
      }
    ];
    return users.find((user)=>{
      return user.email === email;
    })
  }
}
