

const AllBooks = function (props) {


  return (


                
              <table class="secondary">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    props.books.map((book, index) =>{
                      return(
                        <tr key={index}>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td>{book.published}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
 

    )
}

export default AllBooks;