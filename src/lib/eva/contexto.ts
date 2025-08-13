// /src/lib/eva/contexto.ts
import { supabase } from '@/lib/supabase'

export async function obtenerContexto(user_id: string, modulo: string, limite: number = 5) {
  const { data, error } = await supabase
    .from('eva_memoria')
    .select('descripcion')
    .eq('user_id', user_id)
    .eq('modulo', modulo)
    .eq('tipo', 'respuesta')
    .order('created_at', { ascending: false })
    .limit(limite)

  if (error) {
    console.error('❌ Error al obtener contexto:', error)
    return []
  }

  return data?.map((item) => item.descripcion) || []
}
