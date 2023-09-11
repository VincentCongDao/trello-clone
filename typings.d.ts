interface Board{
      columns: Map<TypedColumn, Column>;
}
type TypedColumn = "todo" | "inprocess" | "done"

interface Column {
      id: TypedColumn,
      todos: Todo[]
}

interface Todo  {
      $id: string;
      $createAt: string;
      title: string;
      status: string;
      image?: Image;
}

interface Image{
      bucketId: string;
      fieldId: string;
}