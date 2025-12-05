import express from "express"

import { create, deleteById, getAllUsers, getUserById, updateById } from "../Controller/userController.js"

const router = express.Router()

router.post('/create',create)
router.get('/get',getAllUsers)
router.get('/get/:id', getUserById)
router.put('/update/:id', updateById)
router.delete('/delete/:id', deleteById)

export default router;

