/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface SomeInterface {
  name: string;
}
class Component<T extends SomeInterface> {
  constructor(public props: T) {}
}

class Page extends Component<SomeInterface> {
  pageInfo() {
    console.log(this.props.name);
  }
}

export {};