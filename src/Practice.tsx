type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Sam",
    age: 18
};

function add(a, b) {
    return a + b;
}

function add(a: number, b: number): number {
  return a + b;
}

