import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

interface CartItem {
  product: {
    id: string
    name: string
    category: string
    price: { min: number; max: number }
  }
  selectedColor?: string
  quantity: number
  price: number
}

interface OrderData {
  phone: string
  name?: string
  address?: string
  comment?: string
  items: CartItem[]
  totalItems: number
  totalPrice: number
  timestamp: string
}

export async function saveOrderToFirestore(orderData: OrderData) {
  try {
    const ordersCollection = collection(db, 'orders')

    const orderToSave = {
      ...orderData,
      createdAt: serverTimestamp(),
      status: 'new',
      source: 'website'
    }

    const docRef = await addDoc(ordersCollection, orderToSave)
    console.log('Order saved to Firestore with ID: ', docRef.id)

    return {
      success: true,
      orderId: docRef.id
    }
  } catch (error) {
    console.error('Error saving order to Firestore: ', error)
    throw error
  }
}

export async function saveContactToFirestore(contactData: { name: string; phone: string; comment?: string }) {
  try {
    const contactsCollection = collection(db, 'contacts')

    const contactToSave = {
      ...contactData,
      createdAt: serverTimestamp(),
      status: 'new',
      source: 'website'
    }

    const docRef = await addDoc(contactsCollection, contactToSave)
    console.log('Contact saved to Firestore with ID: ', docRef.id)

    return {
      success: true,
      contactId: docRef.id
    }
  } catch (error) {
    console.error('Error saving contact to Firestore: ', error)
    throw error
  }
}
