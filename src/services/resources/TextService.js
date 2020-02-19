import getMockText from './../../text.service';

async function getText() {
  try {
    const response = await getMockText();
    return response;
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
}

export default {
  getText,
};
