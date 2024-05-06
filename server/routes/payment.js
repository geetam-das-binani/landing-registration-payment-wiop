import express from 'express'
import { payment,verifyPayment } from '../controllers/paymentControllers.js'

const router = express.Router()
router.post('/payment',payment)
router.post('/verify',verifyPayment)


  
  


export default router