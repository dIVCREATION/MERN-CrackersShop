import express from "express" ;
import { addNewCracker, getCracker, getCrackerById, getCrackerByUserId, getSavedCracker, saveCrackerById} from '../Controller/crackerController.js';
import { Authenticate } from "../middlewares/auth.js";
const router = express.Router();

//router.get('/', fetchListOfCracker)
router.post('/add', Authenticate,addNewCracker )
router.get('/', getCracker)
router.get('/saved',getSavedCracker)
router.get('/:id',getCrackerById)
router.get('/user/:id',getCrackerByUserId);
router.post('/:id', Authenticate, saveCrackerById)

//router.delete('/delete/:id', deleteCracker);

export default router;
