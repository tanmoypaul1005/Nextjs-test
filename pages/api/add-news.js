export default function handler(req, res) {
    if (req.method === 'POST') {
      const { data } = req.body // assuming data is sent in the request body
      console.log(data) // do something with the data
      res.status(200).json({ message: 'Data received' })
    } else {
      res.status(405).json({ message: 'Method not allowed' })
    }
  }