import groq from 'groq'

export const query = groq`count(*[])`

export default function DocumentsCount({ data }: any) {
  return (
    <>
      Documents: <strong>{data}</strong>
    </>
  )
}
