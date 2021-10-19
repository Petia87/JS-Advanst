function solution(input) {
    let result = [];

    for (const string of input) {
        const [command, value] = string.split(' ');
        if (command === 'add') {
            add(value);
        }
        else if (command === 'remove') {
            remove(value);
        }
        else if (command === 'print') {
            print(value);
        }
    }

    function add(text) {
        result.push(text);
    }
    function remove(text) {
        result = result.filter(x => x != text);
    }
    function print() {
        console.log(result.join(','));
    }
}

/*function solve(input) {

    const operations = () => {
        let list = [];
        return {
            add: (el) => {
                list.push(el);
            },
            remove: (el) => {
                list = list.filter((x) => x !== el);
            },
            print: () => {
                console.log(list.join(','));
            },
        };
    };

    const result = operations();
    input
        .map((x) => x.split(' '))
        .map(([cmd, text]) => result[cmd](text));
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);*/