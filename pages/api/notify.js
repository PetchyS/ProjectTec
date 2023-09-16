import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message,message2,message3 } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    try {
      const response = await axios.post(
        'https://notify-api.line.me/api/notify',
        `message=${
            '\nชื่อ : '+message+ 
            '\nที่อยู่ : '+message2+ 
            '\nเบอร์โทร : '+message3}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer pn1U9ON8kNJhRLlntzErnbkr97xpf92zxEAB84hqSOB', //เปลี่ยน Token Line Notify 
          },
        }
      );

      if (response.status === 200) {
        return res.status(200).json({ message: 'Message sent successfully' });
      } else {
        return res.status(500).json({ error: 'Failed to send message' });
      }
    } catch (error) {
      console.error('Error sending message to LINE Notify:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
