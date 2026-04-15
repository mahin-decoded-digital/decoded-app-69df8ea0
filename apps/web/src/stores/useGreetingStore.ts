import { create } from 'zustand'
import { apiUrl } from '@/lib/api'

interface GreetingStore {
  message: string
  loading: boolean
  loaded: boolean
  error: string | null
  fetchGreeting: () => Promise<void>
  updateGreeting: (newMessage: string) => Promise<void>
}

export const useGreetingStore = create<GreetingStore>((set, get) => ({
  message: 'Hello, World!', // fallback initially
  loading: false,
  loaded: false,
  error: null,
  fetchGreeting: async () => {
    if (get().loading || get().loaded) return
    set({ loading: true, error: null })
    try {
      const res = await fetch(apiUrl('/api/greeting'))
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      set({ message: data.message, loading: false, loaded: true })
    } catch (err) {
      set({ loading: false, error: err instanceof Error ? err.message : 'Failed to load greeting' })
    }
  },
  updateGreeting: async (newMessage: string) => {
    try {
      const res = await fetch(apiUrl('/api/greeting'), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMessage })
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      set({ message: data.message })
    } catch (err) {
      set({ error: err instanceof Error ? err.message : 'Failed to update greeting' })
    }
  }
}))