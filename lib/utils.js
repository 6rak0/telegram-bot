require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

module.exports.getDates = async () => {
  let { data: dates, error } = await supabase.from('dates').select('*')
  return dates
}

module.exports.getSlots = async date => {
  let { data: dates, error } = await supabase
    .from('dates')
    .select('*')
    .eq('date', date)
  return dates[0].slots
}

module.exports.updateSlots = async (slots, date) =>
  await supabase.from('dates').update({ slots }).eq('date', date)
