
export const book = async (
  _: any,
  { id }: { id: string },
  { clients: { book: bookClient } }: Context
) => {
  const response = await bookClient.book(id)

  if(!response)
    return

  return response

  // retornando promisses :(
  // const author = await response.authors.map(async (id: string) => {
  //   const author = await bookClient.author(id)
  //   return author
  // })

  // const author = await bookClient.author(response.authors[0])

  // return {
  //   ...response,
  //   authors: [author]
  // }
}

