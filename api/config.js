// /api/config.js
module.exports = (req, res) => {
  try {
    const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY');
    }
    res.status(200).send({ SUPABASE_URL, SUPABASE_ANON_KEY });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};