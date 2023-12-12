import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient('https://xpomgalaosneveajkczq.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase
}

export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('conservation').insert(card)
}

export async function findCards() {
  const supabase = getClient()
  const { data: cards, error } = await supabase.from('conservation').select()
  return cards
}

export async function findHomeCards() {
  const supabase = getClient()
  const { data: cards, error } = await supabase.from('cards').select()
  return cards
}

export async function findAnatomy() {
  const supabase = getClient()
  const { data: cards, error } = await supabase.from('anatomy').select()
  return cards
}

export async function findBehavior() {
  const supabase = getClient()
  const { data: cards, error } = await supabase.from('behavior').select()
  return cards
}

export async function findContent() {
  const supabase = getClient()
  const { data: content, error } = await supabase.from('content').select('content').eq('position', 'Top')
  return content
}
