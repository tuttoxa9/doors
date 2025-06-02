import { useState, useEffect } from 'react'
import { collection, getDocs, doc, getDoc, query, where, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { getImageUrls } from '@/lib/imageUtils'
import type { Product, ProductCategory } from '@/types/product'

export const useProducts = (category?: ProductCategory) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        const productsRef = collection(db, 'products')
        let q = query(productsRef, orderBy('createdAt', 'desc'))

        if (category) {
          q = query(productsRef, where('category', '==', category), orderBy('createdAt', 'desc'))
        }

        const querySnapshot = await getDocs(q)
        const productsData: Product[] = []

        for (const docSnapshot of querySnapshot.docs) {
          const data = docSnapshot.data()

          // Загружаем URLs изображений из Firebase Storage
          let imageUrls: string[] = []
          if (data.images && Array.isArray(data.images)) {
            const urls = await getImageUrls(data.images)
            imageUrls = urls.filter((url): url is string => url !== null)
          }

          productsData.push({
            id: docSnapshot.id,
            name: data.name,
            category: data.category,
            price: data.price,
            description: data.description,
            colors: data.colors || [],
            images: imageUrls,
            inStock: data.inStock !== false, // default to true
            featured: data.featured || false,
            createdAt: data.createdAt?.toDate() || new Date(),
            updatedAt: data.updatedAt?.toDate() || new Date()
          })
        }

        setProducts(productsData)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Не удалось загрузить товары')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [category])

  return { products, loading, error }
}

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return

      try {
        setLoading(true)
        setError(null)

        const docRef = doc(db, 'products', id)
        const docSnapshot = await getDoc(docRef)

        if (docSnapshot.exists()) {
          const data = docSnapshot.data()

          // Загружаем URLs изображений из Firebase Storage
          let imageUrls: string[] = []
          if (data.images && Array.isArray(data.images)) {
            const urls = await getImageUrls(data.images)
            imageUrls = urls.filter((url): url is string => url !== null)
          }

          setProduct({
            id: docSnapshot.id,
            name: data.name,
            category: data.category,
            price: data.price,
            description: data.description,
            colors: data.colors || [],
            images: imageUrls,
            inStock: data.inStock !== false,
            featured: data.featured || false,
            createdAt: data.createdAt?.toDate() || new Date(),
            updatedAt: data.updatedAt?.toDate() || new Date()
          })
        } else {
          setError('Товар не найден')
        }
      } catch (err) {
        console.error('Error fetching product:', err)
        setError('Не удалось загрузить товар')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return { product, loading, error }
}
