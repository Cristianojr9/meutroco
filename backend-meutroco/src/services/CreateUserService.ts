import User from '../models/User';
import { getRepository } from 'typeorm';

interface Request{
  email: string;
}

class CreateUserService{
  public async execute({email}: Request) : Promise<User>{
    const usersRepository = getRepository<User>(User);

    // const userCheckExists = await usersRepository.findOne({
    //   where: { email }
    // });

    // if(userCheckExists){
    //   throw new Error('Endereço de e-mail já cadastrado no sistema!');
    // }

    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

  return user;  
  }
}

export default CreateUserService;