import { Router,Request,Response } from "express";
import User, { IUser } from '../../models/user';
const router: Router = Router();

router.get('/',  async (req: Request, res: Response): Promise<void> => {
              try {
                const users: IUser[] = await User.find();
                res.json({message:"User Data Fetch Successfully...!!",data:users});
              } catch (error) {
                res.status(500).json({ message: error.message });
              }
});


router.post('/',async (req: Request, res: Response): Promise<void> => {
  try {
    // const {name,email,age}:IUser=req.body;
    const user: IUser = new User(req.body);
    await user.save();
    res.status(201).json({message:"User Created Successfully...!!",data:user});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
} );


router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const user: IUser | null = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json({message:"User Data Fetch Successfully...!!",data:user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.put('/update/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedUser: IUser | null = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json({message:"User Updated Successfully...!!",data:updatedUser});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete('/delete/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const user: IUser | null = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json({ message: 'User deleted Succesfully..!!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
