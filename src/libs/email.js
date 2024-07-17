export const sendEmail = async ({email, message}) => {
  try {
    fetch(`https://email-api-6j5v.onrender.com`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, message})
    });
  } catch (err) {
    console.error(err);
  }
}