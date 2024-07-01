import * as Yup from 'yup';
import Order from '../schemas/Order';

class OrderController {
  async store(request, response) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number.required(),
            quantity: Yup.number.required(),
          }),
        ),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name } = request.body;

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
    };

    return response.json(request.body);
  }
}

export default new OrderController();
