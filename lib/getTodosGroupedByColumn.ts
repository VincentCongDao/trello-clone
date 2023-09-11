import {databases} from "@/appwrite"
export const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );

  const todos = data.documents;

  const columns = todos.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }

    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && {
        image: JSON.parse(todo.image),
      }),
    });

    return acc; // This line was added to return the accumulator
  }, new Map<TypedColumn, Column>());

      
      // IF Columns doesn't have any inside it's array 
      const columnTypes: TypedColumn[] = ["todo", "inprocess", "done"];
      for (const columnType of columnTypes)
      {
            if (!columns.get(columnType))
            {
                  columns.set(columnType, {
                        id: columnType,
                        todos: [],
                  })
                  }
      }

            console.log(columns); 
    const sortedColumns = new Map(
      [...columns.entries()].sort((a, b) =>
        columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
      )
    );
      const board: Board = {
            columns: sortedColumns
      }
      return board;
      };