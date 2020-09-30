import express from 'express';
import CreateUserService from '../services/CreateUserService'

const usersRouter = express.Router();

usersRouter.post('/', async (request, response) => {
  
  try{

    const { email} = request.body;  
  
      const createUser = new CreateUserService();
  
      const user = await createUser.execute({
        email,
      });
  
      return response.json(user);
  
   }catch(err){
     console.log(err);
     return response.status(400).json({ error: err.message});
   }

})


export default usersRouter;