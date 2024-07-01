import * as Yup from 'yup';
import Order from '../schemas/Order';


class OrderController{
  async store(request, response) {
    //const schema = Yup.object().shape({
     // name: Yup.string().required(),    
   // });

   // try {
  //    await schema.validateSync(request.body, { abortEarly: false });
  //  } catch (err) {
    //  return response.status(400).json({ error: err.errors });
    //}

   
   // const { name } = request.body;
   
    const order = {
      user:{
        id: request.userId ,
        name: request.userName,
    }

    return response.json(order);
  }

  
}



export default new OrderController();
