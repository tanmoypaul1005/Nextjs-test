import useSWR from 'swr'

function MyComponent() {
  const { data, error } = useSWR('https://api.examle.com/data', fetch)

  if (error) return <div>Failed to load data</div>
  if (!data) return <div>Loading data...</div>

  return (
    <div></div>
  )
}

export default MyComponent;