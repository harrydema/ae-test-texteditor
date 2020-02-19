async function getSynonyms(word) {
  try {
    const response = await fetch(`https://api.datamuse.com/words?ml=${word}`, { cache: 'force-cache' });
    return response.json();
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
}

export default {
  getSynonyms,
};
